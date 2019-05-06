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
var ɵ0 = {
    separatorKeyCodes: [ENTER, COMMA]
};
var FmUiComponentsModule = /** @class */ (function () {
    function FmUiComponentsModule() {
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
    return FmUiComponentsModule;
}());
export { FmUiComponentsModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm0tdWktY29tcG9uZW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mbS11aS1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2ZtLXVpLWNvbXBvbmVudHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ3hHLE9BQU8sRUFDTCx5QkFBeUIsRUFDekIscUJBQXFCLEVBQ3JCLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxhQUFhLEVBQ2pELGVBQWUsRUFDZixpQkFBaUIsRUFDbEIsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQixPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztTQW1CbEQ7SUFDUixpQkFBaUIsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7Q0FDbEM7QUFuQlA7SUFBQTtJQXVCb0MsQ0FBQzs7Z0JBdkJwQyxRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsNkJBQTZCLENBQUM7b0JBQzdDLE9BQU8sRUFBRTt3QkFDUCx1QkFBdUI7d0JBQ3ZCLGtCQUFrQjt3QkFDbEIscUJBQXFCO3dCQUNyQixpQkFBaUI7d0JBQ2pCLGNBQWM7d0JBQ2QsYUFBYTt3QkFDYixlQUFlO3dCQUNmLFdBQVc7d0JBQ1gsbUJBQW1CO3FCQUNwQjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztvQkFDeEMsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSx5QkFBeUI7NEJBQ2xDLFFBQVEsSUFFUDt5QkFDRjtxQkFDRjtpQkFDRjs7SUFDbUMsMkJBQUM7Q0FBQSxBQXZCckMsSUF1QnFDO1NBQXhCLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGFyYWN0ZXJpc3RpY3NJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vY2hhcmFjdGVyaXN0aWNzLWlucHV0L2NoYXJhY3RlcmlzdGljcy1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHtcbiAgTUFUX0NISVBTX0RFRkFVTFRfT1BUSU9OUyxcbiAgTWF0QXV0b2NvbXBsZXRlTW9kdWxlLFxuICBNYXRDaGlwc01vZHVsZSwgTWF0Rm9ybUZpZWxkTW9kdWxlLCBNYXRJY29uTW9kdWxlLFxuICBNYXRTZWxlY3RNb2R1bGUsXG4gIE1hdFNuYWNrQmFyTW9kdWxlXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IENPTU1BLCBFTlRFUiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQ2hhcmFjdGVyaXN0aWNzSW5wdXRDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgICBNYXRTbmFja0Jhck1vZHVsZSxcbiAgICBNYXRDaGlwc01vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbQ2hhcmFjdGVyaXN0aWNzSW5wdXRDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBNQVRfQ0hJUFNfREVGQVVMVF9PUFRJT05TLFxuICAgICAgdXNlVmFsdWU6IHtcbiAgICAgICAgc2VwYXJhdG9yS2V5Q29kZXM6IFtFTlRFUiwgQ09NTUFdXG4gICAgICB9XG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEZtVWlDb21wb25lbnRzTW9kdWxlIHsgfVxuIl19