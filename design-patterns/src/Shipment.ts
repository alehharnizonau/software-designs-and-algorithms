import {IShipment, IShipmentData} from "./types";

const ONCECOST = 0.39;

export class Shipment implements IShipment {
    shipmentID: number = 0;
    weight: number;
    fromAddress: string;
    fromZipCode: string;
    toAddress: string;
    toZipCode: string;

    constructor({shipmentID, weight, fromAddress, toAddress, fromZipCode, toZipCode}: IShipmentData) {
        this.shipmentID = shipmentID ? shipmentID : this.getShipmentID();
        this.weight = weight;
        this.fromAddress = fromAddress;
        this.fromZipCode = fromZipCode;
        this.toAddress = toAddress;
        this.toZipCode = toZipCode
    }

    public getInstance(): Shipment {
        return this;
    };

    public getShipmentID(): number {
        return this.shipmentID += 1;
    };

    public ship(): string {
        return `Shipment ID: ${this.shipmentID}, from: ${this.fromAddress}, to: ${this.toAddress}, cost: ${ONCECOST * this.weight}`
    }
}