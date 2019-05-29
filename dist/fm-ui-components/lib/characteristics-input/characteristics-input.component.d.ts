import { ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatAutocompleteSelectedEvent, MatSnackBar } from '@angular/material';
import { Characteristic, CharacteristicsByType, IdentifiedCharacteristic } from '../models/characteristic.model';
import { Value } from '../models/value.model';
interface ValueWithCharacteristic {
    characteristic: Characteristic;
    value: Value;
}
export declare class CharacteristicsInputComponent implements OnChanges {
    private snackBar;
    allCharacteristics: CharacteristicsByType;
    identifiedCharacteristics: IdentifiedCharacteristic[];
    characteristicInput: ElementRef<HTMLInputElement>;
    characteristicFormControl: FormControl;
    characteristicValueOptions: ValueWithCharacteristic[];
    selectedOptions: ValueWithCharacteristic[];
    filteredOptions: Observable<string[] | ValueWithCharacteristic[]>;
    constructor(snackBar: MatSnackBar);
    ngOnChanges(changes: SimpleChanges): void;
    extractValueCharacteristicPairs(characteristics: CharacteristicsByType): ValueWithCharacteristic[];
    removeValueFromSelected(charValue: ValueWithCharacteristic): void;
    onValueSelected(event: MatAutocompleteSelectedEvent): void;
    private validateSelectedValue;
    private _filter;
    private _filterSelected;
}
export {};
