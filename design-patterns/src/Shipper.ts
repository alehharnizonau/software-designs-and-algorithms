import {ShipmentCosts} from "./types";

interface ShipmentStrategy {
    getCost(weight: number): number;
}

class AirEastStrategy implements ShipmentStrategy {
    getCost(weight: number): number {
        return ShipmentCosts.airEast * weight;
    }
}

class ChicagoSprintStrategy implements ShipmentStrategy {
    getCost(weight: number): number {
        return ShipmentCosts.chicagoSprint * weight;
    }
}

class PacificParcelStrategy implements ShipmentStrategy {
    getCost(weight: number): number {
        return ShipmentCosts.pacificParcel * weight;
    }
}

export class Shipper {
    private strategy: ShipmentStrategy;

    setStrategy(code: string): void {
        switch (code[0]) {
            case '4':
            case '5':
            case '6':
                this.strategy = new ChicagoSprintStrategy();
                break;
            case '7':
            case '8':
            case '9':
                this.strategy = new PacificParcelStrategy();
                break;
            default :
                this.strategy = new AirEastStrategy();
        }
    }

    getCost(weight: number): number {
        return this.strategy.getCost(weight);
    }
}