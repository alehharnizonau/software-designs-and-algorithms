import {Shipment} from "./Shipment";

export interface IShipmentData {
    shipmentID: number,
    weight: number,
    fromAddress: string,
    fromZipCode: string,
    toAddress: string,
    toZipCode: string
}

export interface IShipment {
    getInstance: () => Shipment;
    getShipmentID: () => number;
    ship: () => string;
}