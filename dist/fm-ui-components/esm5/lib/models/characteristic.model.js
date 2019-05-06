/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var CharacteristicTypes = {
    SINGLE_GROUP: 'single group',
    IMPLICIT: 'implicit',
    SCALE: 'scale',
    MULTI_GROUP: 'multi group',
};
export { CharacteristicTypes };
/**
 * @record
 */
export function Characteristic() { }
if (false) {
    /** @type {?} */
    Characteristic.prototype.id;
    /** @type {?} */
    Characteristic.prototype.name;
    /** @type {?} */
    Characteristic.prototype.desc;
    /** @type {?} */
    Characteristic.prototype.categoryId;
    /** @type {?} */
    Characteristic.prototype.type;
    /** @type {?} */
    Characteristic.prototype.values;
    /** @type {?} */
    Characteristic.prototype.aliases;
}
/**
 * @record
 */
export function CharacteristicsByType() { }
if (false) {
    /** @type {?} */
    CharacteristicsByType.prototype.implicit;
    /** @type {?} */
    CharacteristicsByType.prototype.scaled;
    /** @type {?} */
    CharacteristicsByType.prototype.singleGroup;
    /** @type {?} */
    CharacteristicsByType.prototype.multiGroup;
}
/**
 * @record
 */
export function CharacteristicAlias() { }
if (false) {
    /** @type {?} */
    CharacteristicAlias.prototype.id;
    /** @type {?} */
    CharacteristicAlias.prototype.characteristicId;
    /** @type {?} */
    CharacteristicAlias.prototype.name;
}
/**
 * @record
 */
export function IdentifiedCharacteristic() { }
if (false) {
    /** @type {?} */
    IdentifiedCharacteristic.prototype.externalCharacteristicId;
    /** @type {?} */
    IdentifiedCharacteristic.prototype.name;
    /** @type {?} */
    IdentifiedCharacteristic.prototype.value;
    /** @type {?} */
    IdentifiedCharacteristic.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcmFjdGVyaXN0aWMubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mbS11aS1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9jaGFyYWN0ZXJpc3RpYy5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFHRSxjQUFlLGNBQWM7SUFDN0IsVUFBVyxVQUFVO0lBQ3JCLE9BQVEsT0FBTztJQUNmLGFBQWMsYUFBYTs7Ozs7O0FBRzdCLG9DQVFDOzs7SUFQQyw0QkFBVzs7SUFDWCw4QkFBYTs7SUFDYiw4QkFBYTs7SUFDYixvQ0FBbUI7O0lBQ25CLDhCQUEwQjs7SUFDMUIsZ0NBQWdCOztJQUNoQixpQ0FBK0I7Ozs7O0FBR2pDLDJDQUtDOzs7SUFKQyx5Q0FBMkI7O0lBQzNCLHVDQUF5Qjs7SUFDekIsNENBQThCOztJQUM5QiwyQ0FBNkI7Ozs7O0FBRy9CLHlDQUlDOzs7SUFIQyxpQ0FBVzs7SUFDWCwrQ0FBeUI7O0lBQ3pCLG1DQUFhOzs7OztBQUdmLDhDQUtDOzs7SUFKQyw0REFBb0Q7O0lBQ3BELHdDQUFhOztJQUNiLHlDQUFjOztJQUNkLHdDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsdWUgfSBmcm9tICcuL3ZhbHVlLm1vZGVsJztcblxuZXhwb3J0IGVudW0gQ2hhcmFjdGVyaXN0aWNUeXBlcyB7XG4gIFNJTkdMRV9HUk9VUCA9ICdzaW5nbGUgZ3JvdXAnLFxuICBJTVBMSUNJVCA9ICdpbXBsaWNpdCcsXG4gIFNDQUxFID0gJ3NjYWxlJyxcbiAgTVVMVElfR1JPVVAgPSAnbXVsdGkgZ3JvdXAnXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhcmFjdGVyaXN0aWMge1xuICBpZDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG4gIGRlc2M6IHN0cmluZztcbiAgY2F0ZWdvcnlJZDogbnVtYmVyO1xuICB0eXBlOiBDaGFyYWN0ZXJpc3RpY1R5cGVzO1xuICB2YWx1ZXM6IFZhbHVlW107XG4gIGFsaWFzZXM6IENoYXJhY3RlcmlzdGljQWxpYXNbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaGFyYWN0ZXJpc3RpY3NCeVR5cGUge1xuICBpbXBsaWNpdDogQ2hhcmFjdGVyaXN0aWNbXTtcbiAgc2NhbGVkOiBDaGFyYWN0ZXJpc3RpY1tdO1xuICBzaW5nbGVHcm91cDogQ2hhcmFjdGVyaXN0aWNbXTtcbiAgbXVsdGlHcm91cDogQ2hhcmFjdGVyaXN0aWNbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaGFyYWN0ZXJpc3RpY0FsaWFzIHtcbiAgaWQ6IG51bWJlcjtcbiAgY2hhcmFjdGVyaXN0aWNJZDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSWRlbnRpZmllZENoYXJhY3RlcmlzdGljIHtcbiAgZXh0ZXJuYWxDaGFyYWN0ZXJpc3RpY0lkOiBzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsO1xuICBuYW1lOiBzdHJpbmc7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIHR5cGU6IHN0cmluZztcbn1cbiJdfQ==