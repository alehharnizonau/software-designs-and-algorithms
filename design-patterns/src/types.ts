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

export enum ShipmentCosts {
    airEast = 0.39,
    chicagoSprint = 0.42,
    pacificParcel = 0.51
}