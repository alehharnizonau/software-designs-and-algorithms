import {ShipmentCosts} from "./types";

export interface ShipmentStrategy {
    getCost(weight: number): number;
}

export class AirEastStrategy implements ShipmentStrategy {
    getCost(weight: number): number {
        return ShipmentCosts.airEast * weight;
    }
}

export class ChicagoSprintStrategy implements ShipmentStrategy {
    getCost(weight: number): number {
        return ShipmentCosts.chicagoSprint * weight;
    }
}

export class PacificParcelStrategy implements ShipmentStrategy {
    getCost(weight: number): number {
        return ShipmentCosts.pacificParcel * weight;
    }
}

export class Shipper {
    private strategy: ShipmentStrategy;

    setStrategy(s: ShipmentStrategy): void {
        this.strategy = s;
    }

    getCostStrategy(weight: number): number {
        return this.strategy.getCost(weight);
    }
}