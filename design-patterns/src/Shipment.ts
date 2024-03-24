import {IShipment, IShipmentData} from "./types";
import {AirEastStrategy, ChicagoSprintStrategy, PacificParcelStrategy, ShipmentStrategy, Shipper} from "./Shipper";

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
        return `Shipment ID: ${this.shipmentID}, from: ${this.fromAddress}, to: ${this.toAddress}, cost: ${this.getCost()}$`
    }

    private getCost(): number {
        const shipper: Shipper = new Shipper();
        shipper.setStrategy(this.getShipperStrategy());

        return shipper.getCostStrategy(this.weight);
    }

    private getShipperStrategy(): ShipmentStrategy {
        switch (this.fromZipCode[0]) {
            case '4':
            case '5':
            case '6':
                return new ChicagoSprintStrategy();
            case '7':
            case '8':
            case '9':
                return new PacificParcelStrategy();
            default :
                return new AirEastStrategy();
        }
    };
}