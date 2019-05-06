/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CharacteristicsInputComponent } from './characteristics-input/characteristics-input.component';
import { MAT_CHIPS_DEFAULT_OPTIONS, MatAutocompleteModule, MatChipsModule, MatFormFieldModule, MatIconModule, MatSelectModule, MatSnackBarModule } from '@angular/material';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const ɵ0 = {
    separatorKeyCodes: [ENTER, COMMA]
};
export class FmUiComponentsModule {
}
FmUiComponentsModule.decorators = [
    { type: NgModule, args: [{
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
                        useValue: ɵ0
                    }
                ]
            },] }
];
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm0tdWktY29tcG9uZW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mbS11aS1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2ZtLXVpLWNvbXBvbmVudHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ3hHLE9BQU8sRUFDTCx5QkFBeUIsRUFDekIscUJBQXFCLEVBQ3JCLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxhQUFhLEVBQ2pELGVBQWUsRUFDZixpQkFBaUIsRUFDbEIsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQixPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztXQW1CbEQ7SUFDUixpQkFBaUIsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7Q0FDbEM7QUFJUCxNQUFNLE9BQU8sb0JBQW9COzs7WUF2QmhDLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztnQkFDN0MsT0FBTyxFQUFFO29CQUNQLHVCQUF1QjtvQkFDdkIsa0JBQWtCO29CQUNsQixxQkFBcUI7b0JBQ3JCLGlCQUFpQjtvQkFDakIsY0FBYztvQkFDZCxhQUFhO29CQUNiLGVBQWU7b0JBQ2YsV0FBVztvQkFDWCxtQkFBbUI7aUJBQ3BCO2dCQUNELE9BQU8sRUFBRSxDQUFDLDZCQUE2QixDQUFDO2dCQUN4QyxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLHlCQUF5Qjt3QkFDbEMsUUFBUSxJQUVQO3FCQUNGO2lCQUNGO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hhcmFjdGVyaXN0aWNzSW5wdXRDb21wb25lbnQgfSBmcm9tICcuL2NoYXJhY3RlcmlzdGljcy1pbnB1dC9jaGFyYWN0ZXJpc3RpY3MtaW5wdXQuY29tcG9uZW50JztcbmltcG9ydCB7XG4gIE1BVF9DSElQU19ERUZBVUxUX09QVElPTlMsXG4gIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgTWF0Q2hpcHNNb2R1bGUsIE1hdEZvcm1GaWVsZE1vZHVsZSwgTWF0SWNvbk1vZHVsZSxcbiAgTWF0U2VsZWN0TW9kdWxlLFxuICBNYXRTbmFja0Jhck1vZHVsZVxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBDT01NQSwgRU5URVIgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0NoYXJhY3RlcmlzdGljc0lucHV0Q29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRBdXRvY29tcGxldGVNb2R1bGUsXG4gICAgTWF0U25hY2tCYXJNb2R1bGUsXG4gICAgTWF0Q2hpcHNNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW0NoYXJhY3RlcmlzdGljc0lucHV0Q29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTUFUX0NISVBTX0RFRkFVTFRfT1BUSU9OUyxcbiAgICAgIHVzZVZhbHVlOiB7XG4gICAgICAgIHNlcGFyYXRvcktleUNvZGVzOiBbRU5URVIsIENPTU1BXVxuICAgICAgfVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBGbVVpQ29tcG9uZW50c01vZHVsZSB7IH1cbiJdfQ==