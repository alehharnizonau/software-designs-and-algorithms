import {Item} from "./Item";

export abstract class Weapon extends Item {
    public static MODIFIER_CHANGE_RATE = 0.05;
    protected baseDurability: number;
    protected baseDamage: number;
    protected damageModifier: number = 0;
    protected durabilityModifier: number = 0;

    constructor(name: string, baseDamage: number, baseDurability: number, value: number, weight: number) {
        super(name, value, weight);
        this.baseDamage = baseDamage;
        this.baseDurability = baseDurability;
    }

    public getEffectiveDamage(): number {
        return this.baseDamage + this.damageModifier;
    }

    public getEffectiveDurability(durabilityModifier?: number): number {
        return durabilityModifier
            ? (this.baseDurability + durabilityModifier)
            : (this.baseDurability + this.durabilityModifier);
    }

    public toString(): string {
        return `${super.toString()}, Damage: ${this.getEffectiveDamage().toFixed(2)}, Durability: ${(this.getEffectiveDurability() * 100).toFixed(2)}%`
    }

    public use(): string {
        if (this.baseDurability <= 0) {
            return `You can\'t use the ${this.name}, it is broken.`
        }

        this.baseDurability = this.getEffectiveDurability(-Weapon.MODIFIER_CHANGE_RATE);
        return this.baseDurability <= 0
            ? `You use the ${this.name}, dealing ${Weapon.MODIFIER_CHANGE_RATE} points of damage.\nThe ${this.name} breaks.`
            : `You use the ${this.name}, dealing ${Weapon.MODIFIER_CHANGE_RATE} points of damage.`;
    }
}