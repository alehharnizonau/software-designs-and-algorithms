import {ShipmentCosts, ShipmentType} from "./types";

export interface ShipmentStrategy {
    getLetterCost: (weight: number) => number;
    getPackageCost: (weight: number) => number;
    getOversizedCost: (weight: number) => number;
    getStandardPackageCost: (weight: number) => number;
}

export class AirEastStrategy implements ShipmentStrategy {
    private cost: number = ShipmentCosts.AirEast;

    public getLetterCost(weight: number): number {
        return this.getStandardPackageCost(weight);
    }

    public getPackageCost(weight: number): number {
        this.cost = 0.25;
        return this.cost * weight;
    }

    public getOversizedCost(weight: number): number {
        this.cost = 10;
        return this.cost + this.getStandardPackageCost(weight);
    }

    public getStandardPackageCost(weight: number): number {
        return weight * this.cost;
    };
}

export class ChicagoSprintStrategy implements ShipmentStrategy {
    private cost: number = ShipmentCosts.ChicagoSprint;

    public getLetterCost(weight: number): number {
        return this.getStandardPackageCost(weight);
    }

    public getPackageCost(weight: number): number {
        this.cost = 0.2;
        return this.cost * weight;
    }

    public getOversizedCost(weight: number): number {
        return this.getStandardPackageCost(weight);
    }

    public getStandardPackageCost(weight: number): number {
        return weight * this.cost;
    };
}

export class PacificParcelStrategy implements ShipmentStrategy {
    private cost: number = ShipmentCosts.PacificParcel;

    public getLetterCost(weight: number): number {
        return this.getStandardPackageCost(weight);
    }

    public getPackageCost(weight: number): number {
        this.cost = 0.19;
        return this.cost * weight;
    }

    public getOversizedCost(weight: number): number {
        this.cost = 0.02 * weight;
        return this.cost + this.getStandardPackageCost(weight);
    }

    public getStandardPackageCost(weight: number): number {
        return weight * this.cost;
    };
}

export class Shipper {
    private strategy: ShipmentStrategy;

    setStrategy(s: ShipmentStrategy): void {
        this.strategy = s;
    }

    getCostStrategy(type: ShipmentType, weight: number): number {
        switch (type) {
            case (ShipmentType.Letter):
                return this.strategy.getLetterCost(weight);
            case (ShipmentType.Package):
                return this.strategy.getPackageCost(weight);
            case (ShipmentType.Oversized):
                return this.strategy.getOversizedCost(weight);
            default:
                return this.strategy.getStandardPackageCost(weight);
        }
    }
}