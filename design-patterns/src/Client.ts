import {Shipment} from "./Shipment";
import {IShipmentData} from "./types";

interface IClient {
    request: (data: IShipmentData) => Shipment
}

export class Client implements IClient {
    public request(data: IShipmentData): Shipment {
        return new Shipment(data);
    }
}