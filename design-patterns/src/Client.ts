import {Shipment} from "./Shipment";
import {IShipmentData} from "./types";
import {ShipmentDecorator} from "./ShipmentDecorator";

interface IClient {
    request: (data: IShipmentData) => ShipmentDecorator
}

export class Client implements IClient {
    public request(data: IShipmentData): ShipmentDecorator {
        const shipment: Shipment = new Shipment(data);
        const {isFragile, isDoNotLeave, isReturnReceiptRequired} = data;
        return new ShipmentDecorator({shipment, isFragile, isDoNotLeave, isReturnReceiptRequired});
    }
}