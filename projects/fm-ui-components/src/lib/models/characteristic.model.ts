import { Value } from './value.model';

export enum CharacteristicTypes {
  SINGLE_GROUP = 'single group',
  IMPLICIT = 'implicit',
  SCALE = 'scale',
  MULTI_GROUP = 'multi group'
}

export interface Characteristic {
  id: number;
  name: string;
  desc: string;
  categoryId: number;
  type: CharacteristicTypes;
  values: Value[];
  aliases: CharacteristicAlias[];
}

export interface CharacteristicsByType {
  implicit: Characteristic[];
  scaled: Characteristic[];
  singleGroup: Characteristic[];
  multiGroup: Characteristic[];
}

export interface CharacteristicAlias {
  id: number;
  characteristicId: number;
  name: string;
}

export interface IdentifiedCharacteristic {
  externalCharacteristicId: string | undefined | null;
  name: string;
  value: string;
  type: string;
}
