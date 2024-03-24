import {IShipment, IShipmentData, ShipmentType} from "./types";
import {AirEastStrategy, ChicagoSprintStrategy, PacificParcelStrategy, ShipmentStrategy, Shipper} from "./Shipper";

export class Shipment implements IShipment {
    private shipmentID: number = 0;
    private readonly weight: number;
    private readonly fromAddress: string;
    private readonly fromZipCode: string;
    private readonly toAddress: string;
    private toZipCode: string;

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
        return `Shipment with the ID ${this.shipmentID} will be picked up from ${this.fromAddress} and shipped to ${this.toAddress} \nCost = ${this.getCost()}`
    }

    private getCost(): number {
        const shipper: Shipper = new Shipper();
        shipper.setStrategy(this.getShipperStrategy());

        return shipper.getCostStrategy(this.getTypeOfShipment(), this.weight);
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

    private getTypeOfShipment(): ShipmentType {
        if (this.weight <= 15) {
            return ShipmentType.Letter;
        }
        if (this.weight <= 160) {
            return ShipmentType.Package;
        }
        return ShipmentType.Oversized;
    }
}