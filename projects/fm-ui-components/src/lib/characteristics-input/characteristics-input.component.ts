import { Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent, MatSnackBar } from '@angular/material';
import { Characteristic, CharacteristicsByType, CharacteristicTypes, IdentifiedCharacteristic } from '../models/characteristic.model';
import { Value } from '../models/value.model';

interface ValueWithCharacteristic {
  characteristic: Characteristic;
  value: Value;
}

@Component({
  selector: 'fm-characteristics-input',
  templateUrl: './characteristics-input.component.html',
  styleUrls: ['./characteristics-input.component.scss', '../../styles.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CharacteristicsInputComponent implements OnChanges {
  @Input() allCharacteristics!: CharacteristicsByType;
  @Input() identifiedCharacteristics!: IdentifiedCharacteristic[];

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
        valuesWithCharacteristics.push({
          characteristic: char,
          value: val
        });
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
    console.log('filtering');
    if (typeof value === 'string') {
      const filterValue = value.toLowerCase();

      return this.characteristicValueOptions.filter(characteristicValue => {
        const joinedName = characteristicValue.characteristic.name + ' ' + characteristicValue.value.name.toLowerCase();

        return joinedName.toLowerCase().indexOf(filterValue) >= 0
          && this.selectedOptions.indexOf(characteristicValue) < 0;
      });
    }

    return [];
  }

  private _filterSelected(): ValueWithCharacteristic[] {
    return this.characteristicValueOptions.filter(characteristicValue => {
      return this.selectedOptions.indexOf(characteristicValue) < 0;
    });
  }
}
