import {Weapon} from "./Weapon";

export class Sword extends Weapon {
    constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
        super('sword', baseDamage, baseDurability, value, weight);
    }

    public polish(): void {
        if (super.getEffectiveDamage() < 1.25 * this.baseDamage) {
            this.damageModifier += Weapon.MODIFIER_CHANGE_RATE;
        }
    }
}