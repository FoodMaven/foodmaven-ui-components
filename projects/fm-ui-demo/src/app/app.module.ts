import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FmUiComponentsModule } from 'fm-ui-components';
import { HttpClientModule } from '@angular/common/http';
import { CharacteristicInputDemoComponent } from './characteristic-input-demo/characteristic-input-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacteristicInputDemoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FmUiComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
