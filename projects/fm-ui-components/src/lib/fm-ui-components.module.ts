import { NgModule } from '@angular/core';
import { CharacteristicsInputComponent } from './characteristics-input/characteristics-input.component';
import {
  MAT_CHIPS_DEFAULT_OPTIONS,
  MatAutocompleteModule,
  MatChipsModule, MatFormFieldModule, MatIconModule,
  MatSelectModule,
  MatSnackBarModule
} from '@angular/material';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CharacteristicsInputComponent],
  imports: [
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    MatChipsModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [CharacteristicsInputComponent],
  providers: [
    {
      provide: MAT_CHIPS_DEFAULT_OPTIONS,
      useValue: {
        separatorKeyCodes: [ENTER, COMMA]
      }
    }
  ]
})
export class FmUiComponentsModule { }
