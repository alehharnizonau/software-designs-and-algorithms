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
    AirEast = 0.39,
    ChicagoSprint = 0.42,
    PacificParcel = 0.51
}

export enum ShipmentType {
    Letter = 'letter',
    Package = 'package',
    Oversized = 'oversized',
}