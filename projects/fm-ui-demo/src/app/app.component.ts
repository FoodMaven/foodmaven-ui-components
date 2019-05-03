import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

enum FoodMavenComponent {
  CHARACTERISTICS_INPUT = 'Characteristic Input'
}

@Component({
  selector: 'fm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public components = FoodMavenComponent;
  public componentKeys = Object.values(FoodMavenComponent);
  public activeComponent = this.componentKeys[0];

  setActiveComponent(component) {
    this.activeComponent = component;
  }

  // public characteristics;
  //
  // constructor(private http: HttpClient) {
  // }
  //
  // ngOnInit() {
  //   this.http.get<any>('http://localhost:3008/category/2587/characteristicsAndUom')
  //     .subscribe(resp => {
  //       this.characteristics = resp.characteristics;
  //     });
  // }
}
