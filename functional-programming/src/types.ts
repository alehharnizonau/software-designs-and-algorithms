import {Maybe} from './fp/maybe';

export interface Point {
    x: number;
    y: number;
}

export interface User {
    name: string;
    position: Point;
}

export enum Demand {
    Driving = 'Driving',
    Fighting = 'Fighting',
    Fishing = 'Fishing'
}

export interface ClientUser extends User {
    demands: Maybe<Array<Demand>>;
    reward: number;
}

export interface RawClientUser extends Omit<ClientUser, 'demands'> {
    demands: Array<Demand>;
}

export interface Clients extends ClientUser {
    distance: number;
}

export type RawClients = Omit<ClientUser, 'demands'>;

export type AggregatedClients = Omit<Clients, 'demands' | 'position'>;

export interface ExecutorUser extends User {
    possibilities: Array<Demand>;
}

