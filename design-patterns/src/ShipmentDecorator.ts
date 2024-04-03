import {IShipment, IShipmentDecorator} from "./types";
import {Shipment} from "./Shipment";

export class ShipmentDecorator implements IShipment {
    protected wrappee: Shipment;
    private readonly isFragile: boolean;
    private readonly isDoNotLeave: boolean;
    private readonly isReturnReceiptRequired: boolean;

    constructor({
                    shipment,
                    isFragile = false,
                    isDoNotLeave = false,
                    isReturnReceiptRequired = false
                }: IShipmentDecorator) {
        this.wrappee = shipment;
        this.isFragile = isFragile;
        this.isDoNotLeave = isDoNotLeave;
        this.isReturnReceiptRequired = isReturnReceiptRequired;
    }

    public getInstance(): Shipment {
        return this.wrappee.getInstance();
    };

    public getShipmentID(): number {
        return this.wrappee.getShipmentID();
    };

    public ship(): string {
        return `${this.wrappee.ship()}
${this.isFragile ? "**MARK FRAGILE**" : ""}
${this.isDoNotLeave ? "**MARK DO NOT LEAVE IF ADDRESS NOT AT HOME**" : ""}
${this.isReturnReceiptRequired ? "**MARK RETURN RECEIPT REQUESTED**" : ""}`;
    }
}