import {ap, Either, flatten, fromPromise, getOrElse, left, right} from './fp/either';
import {pipe} from './fp/utils';
import {fetchClient, fetchExecutor} from './fetching';
import {AggregatedClients, ClientUser, ExecutorUser, RawClients, RawClientUser} from './types';
import {map, sort} from "./fp/array";
import {fromNullable, isNone, isSome} from "./fp/maybe";
import {distance} from "./utils";
import {fromCompare, Ord, ordNumber, revert} from "./fp/ord";

type Response<R> = Promise<Either<string, R>>

const getExecutor = (): Response<ExecutorUser> => fromPromise(fetchExecutor());
const getClients = (): Response<Array<ClientUser>> => fromPromise(fetchClient().then(map((item: RawClientUser) => ({
    ...item,
    demands: fromNullable(item.demands)
}))));

export enum SortBy {
    distance = 'distance',
    reward = 'reward',
}

export const show = (sortBy: SortBy) => (clients: Array<ClientUser>) => (executor: ExecutorUser): Either<string, string> => {
    const matchedPossibilities: ClientUser[] = clients.filter((client) => isSome(client.demands)
        ? client.demands.value.find((demand) =>
            executor.possibilities.includes(demand)
        )
        : isNone(client.demands)
    );

    const aggregatedClients: AggregatedClients[] = map(({name, position, reward}: RawClients) => ({
        name,
        distance: distance(position, executor.position),
        reward
    }))(matchedPossibilities);

    const predicate = (item1: AggregatedClients, item2: AggregatedClients) => (
        ordNumber.compare(item1[SortBy[sortBy]], item2[SortBy[sortBy]])
    );
    const ordItem: Ord<AggregatedClients> = fromCompare(predicate);
    const revertedOrdItem: Ord<AggregatedClients> = revert(ordItem);

    const sortedClients: AggregatedClients[] = sort(
        sortBy === SortBy.reward ? revertedOrdItem : ordItem
    )(aggregatedClients);

    const clientsToString: string[] = map(
        ({name, distance, reward}): string =>
            `name: ${name}, distance: ${distance}, reward: ${reward}`
    )(sortedClients);

    const demandsInfo: string =
        matchedPossibilities.length === clients.length
            ? "This executor meets all demands of all clients!"
            : `This executor meets the demands of only ${matchedPossibilities.length} out of ${clients.length} clients`;

    const clientsInfo: string = `${demandsInfo}\n
Available clients sorted by ${sortBy === SortBy.distance
        ? `${SortBy.distance} to executor`
        : `highest ${SortBy.reward}`
    }:
${clientsToString.join("\n")}`;

    const noClients: string = 'This executor cannot meet the demands of any client!';

    return matchedPossibilities.length ? right(clientsInfo) : left(noClients);
}

export const main = (sortBy: SortBy): Promise<string> => (
    Promise
        .all([getClients(), getExecutor()]) // Fetch clients and executor
        .then(([clients, executor]) => (
            pipe(
                /**
                 * Since the "show" function takes two parameters, the value of which is inside Either
                 * clients is Either<string, Array<Client>>, an executor is Either<string, Executor>. How to pass only Array<Client> and Executor to the show?
                 * Either is an applicative type class, which means that we can apply each parameter by one
                 */
                right(show(sortBy)), // Firstly, we need to lift our function to the Either
                ap(clients), // Apply first parameter
                ap(executor), // Apply second parameter
                flatten, // show at the end returns Either as well, so the result would be Either<string, Either<string, string>>. We need to flatten the result
                getOrElse((err: string) => err) // In case of any left (error) value, it would be stopped and show error. So, if clients or executor is left, the show would not be called, but onLeft in getOrElse would be called
            )
        ))
);
