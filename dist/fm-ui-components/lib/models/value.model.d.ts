import { CharacteristicTypes } from './characteristic.model';
export interface Value {
    id: number;
    characteristicId: number;
    type: CharacteristicTypes;
    name: string;
    rank: number;
    pricingAdjustment: number;
    aliases: ValueAlias[];
}
export interface ValueAlias {
    id: number;
    valueId: number;
    name: string;
}
