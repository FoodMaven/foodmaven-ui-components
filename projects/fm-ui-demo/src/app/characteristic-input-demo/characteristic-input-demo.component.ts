import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'fm-characteristic-input-demo',
  templateUrl: './characteristic-input-demo.component.html',
  styleUrls: ['./characteristic-input-demo.component.scss']
})
export class CharacteristicInputDemoComponent implements OnInit {
  public allCharacteristics;
  public appliedCharacteristics;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getCharacteristicsForGroundBeef();
  }

  getCharacteristicsForGroundBeef() {
    this.http.get<any>('http://localhost:3008/category/2587/characteristicsAndUom')
      .subscribe(characteristicsAndUom => {
        this.allCharacteristics = characteristicsAndUom.characteristics;
        this.getAppliedCharacteristics(characteristicsAndUom.characteristics);
      });
  }

  getAppliedCharacteristics(characteristics) {
    this.appliedCharacteristics = [];

    if (characteristics.implicit && characteristics.implicit.length) {
      const char = characteristics.implicit[0];

      const appliedCharacteristic = {
        externalCharacteristicId: char.id,
        name: char.name,
        value: char.name,
        type: char.type
      };

      this.appliedCharacteristics.push(appliedCharacteristic);
    }

    if (characteristics.scaled && characteristics.scaled.length) {
      const char = characteristics.scaled[0];

      const appliedCharacteristic = {
        externalCharacteristicId: char.id,
        name: char.name,
        value: char.values[0].name,
        type: char.type
      };

      this.appliedCharacteristics.push(appliedCharacteristic);
    }

    if (characteristics.singleGroup && characteristics.singleGroup.length) {
      const char = characteristics.singleGroup[0];

      const appliedCharacteristic = {
        externalCharacteristicId: char.id,
        name: char.name,
        value: char.values[0].name,
        type: char.type
      };

      this.appliedCharacteristics.push(appliedCharacteristic);
    }

    if (characteristics.multiGroup && characteristics.multiGroup.length) {
      const char = characteristics.multiGroup[0];

      const appliedCharacteristic = {
        externalCharacteristicId: char.id,
        name: char.name,
        value: char.values[0].name,
        type: char.type
      };

      this.appliedCharacteristics.push(appliedCharacteristic);
    }

  }
}
