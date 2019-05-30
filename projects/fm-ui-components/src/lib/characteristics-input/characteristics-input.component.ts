import { Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent, MatSnackBar } from '@angular/material';
import {
  CharacteristicsByType,
  CharacteristicTypes,
  IdentifiedCharacteristic,
  ValueWithCharacteristic,
} from '../models/characteristic.model';
import { ValueAlias } from '../models/value.model';

@Component({
  selector: 'fm-characteristics-input',
  templateUrl: './characteristics-input.component.html',
  styleUrls: ['./characteristics-input.component.scss', '../../styles.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CharacteristicsInputComponent implements OnChanges {
  @Input() allCharacteristics!: CharacteristicsByType;
  @Input() identifiedCharacteristics!: IdentifiedCharacteristic[];
  @Input() readOnly = false;

  @ViewChild('charInput') characteristicInput!: ElementRef<HTMLInputElement>;

  characteristicFormControl = new FormControl('');
  characteristicValueOptions: ValueWithCharacteristic[] = [];
  selectedOptions: ValueWithCharacteristic[] = [];
  filteredOptions: Observable<string[] | ValueWithCharacteristic[]>;

  constructor(private snackBar: MatSnackBar) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.allCharacteristics && changes.allCharacteristics.currentValue) {
      this.selectedOptions = [];
      this.characteristicValueOptions = this.extractValueCharacteristicPairs(changes.allCharacteristics.currentValue);

      this.filteredOptions = this.characteristicFormControl.valueChanges.pipe(
        startWith(null),
        map((filterString: string | null) => {
          return filterString ? this._filter(filterString) : this._filterSelected();
        })
      );
    }

    if (changes.identifiedCharacteristics && changes.identifiedCharacteristics.currentValue) {
      this.selectedOptions = [];

      const identifiedCharacteristics: IdentifiedCharacteristic[] = changes.identifiedCharacteristics.currentValue;

      identifiedCharacteristics.forEach(identifiedChar => {
        const match = this.characteristicValueOptions.find((char) => {
          return char.characteristic.name === identifiedChar.name && char.value.name === identifiedChar.value;
        });

        if (match) {
          this.selectedOptions.push(match);
        }
      });
    }
  }

  extractValueCharacteristicPairs(characteristics: CharacteristicsByType): ValueWithCharacteristic[] {
    const allCharacteristics = [
      ...characteristics.implicit,
      ...characteristics.scaled,
      ...characteristics.singleGroup,
      ...characteristics.multiGroup
    ];
    const valuesWithCharacteristics: ValueWithCharacteristic[] = [];

    allCharacteristics.forEach(char => {
      char.values.forEach(val => {

        valuesWithCharacteristics.push(new ValueWithCharacteristic(char, val));
      });
    });
    return valuesWithCharacteristics;
  }

  removeValueFromSelected(charValue: ValueWithCharacteristic): void {
    const index = this.selectedOptions.indexOf(charValue);

    if (index >= 0) {
      this.selectedOptions.splice(index, 1);
      this.characteristicFormControl.setValue(null);   // manually trigger valueChange so value is repopulated in filtered results
    }
  }

  onValueSelected(event: MatAutocompleteSelectedEvent): void {
    const selected = event.option.value;
    const valid = this.validateSelectedValue(selected);


    if (valid) {
      this.selectedOptions.push(selected);
      this.characteristicInput.nativeElement.value = '';
      this.characteristicFormControl.setValue(null);
    } else {
      this.snackBar.open(
        `A value from ${selected.characteristic.name} has already been selected`,
        undefined,
        {
          duration: 3000,
          panelClass: 'snackbar-error'
        }
      );
    }

  }

  private validateSelectedValue(charValue: ValueWithCharacteristic): boolean {
    let valid = true;

    switch (charValue.characteristic.type) {
      case CharacteristicTypes.SINGLE_GROUP: {
        this.selectedOptions.forEach(option => {
          if (charValue.characteristic.values.indexOf(option.value) >= 0) {
            valid = false;
          }
        });
        break;
      }

      case CharacteristicTypes.SCALE: {
        this.selectedOptions.forEach(option => {
          if (charValue.characteristic.values.indexOf(option.value) >= 0) {
            valid = false;
          }
        });
        break;
      }
    }

    return valid;
  }

  private _filter(value: string): ValueWithCharacteristic[] {
    if (typeof value === 'string') {
      const filterValue = value.toLowerCase();

      return this.characteristicValueOptions.filter(characteristicValue => {
        const aliases = characteristicValue.value.aliases.map((alias: ValueAlias) => alias.name);
        // tslint:disable-next-line:max-line-length
        const joinedNameWithAlias = characteristicValue.characteristic.name + ' ' + characteristicValue.value.name.toLowerCase() + ' ' + aliases.join(' ').toLowerCase();
        const isPossibleSelection = joinedNameWithAlias.toLowerCase().indexOf(filterValue) >= 0
          && this.selectedOptions.indexOf(characteristicValue) < 0;

        if (isPossibleSelection && aliases.find((alias: string) => alias.toLowerCase() === filterValue)) {
          characteristicValue.alias = aliases.find((alias: string) => alias.toLowerCase() === filterValue);
        } else {
          characteristicValue.alias = undefined;
        }

        return isPossibleSelection;
      });
    }

    return [];
  }

  private _filterSelected(): ValueWithCharacteristic[] {
    return this.characteristicValueOptions.filter(characteristicValue => {
      return !this.selectedOptions.find((option: ValueWithCharacteristic) => option.value.name === characteristicValue.value.name);
    });
  }
}
