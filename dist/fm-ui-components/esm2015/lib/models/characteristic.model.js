/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const CharacteristicTypes = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcmFjdGVyaXN0aWMubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZm9vZG1hdmVuL2ZtLXVpLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL2NoYXJhY3RlcmlzdGljLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUdFLGNBQWUsY0FBYztJQUM3QixVQUFXLFVBQVU7SUFDckIsT0FBUSxPQUFPO0lBQ2YsYUFBYyxhQUFhOzs7Ozs7QUFHN0Isb0NBUUM7OztJQVBDLDRCQUFXOztJQUNYLDhCQUFhOztJQUNiLDhCQUFhOztJQUNiLG9DQUFtQjs7SUFDbkIsOEJBQTBCOztJQUMxQixnQ0FBZ0I7O0lBQ2hCLGlDQUErQjs7Ozs7QUFHakMsMkNBS0M7OztJQUpDLHlDQUEyQjs7SUFDM0IsdUNBQXlCOztJQUN6Qiw0Q0FBOEI7O0lBQzlCLDJDQUE2Qjs7Ozs7QUFHL0IseUNBSUM7OztJQUhDLGlDQUFXOztJQUNYLCtDQUF5Qjs7SUFDekIsbUNBQWE7Ozs7O0FBR2YsOENBS0M7OztJQUpDLDREQUFvRDs7SUFDcEQsd0NBQWE7O0lBQ2IseUNBQWM7O0lBQ2Qsd0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWx1ZSB9IGZyb20gJy4vdmFsdWUubW9kZWwnO1xuXG5leHBvcnQgZW51bSBDaGFyYWN0ZXJpc3RpY1R5cGVzIHtcbiAgU0lOR0xFX0dST1VQID0gJ3NpbmdsZSBncm91cCcsXG4gIElNUExJQ0lUID0gJ2ltcGxpY2l0JyxcbiAgU0NBTEUgPSAnc2NhbGUnLFxuICBNVUxUSV9HUk9VUCA9ICdtdWx0aSBncm91cCdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaGFyYWN0ZXJpc3RpYyB7XG4gIGlkOiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbiAgZGVzYzogc3RyaW5nO1xuICBjYXRlZ29yeUlkOiBudW1iZXI7XG4gIHR5cGU6IENoYXJhY3RlcmlzdGljVHlwZXM7XG4gIHZhbHVlczogVmFsdWVbXTtcbiAgYWxpYXNlczogQ2hhcmFjdGVyaXN0aWNBbGlhc1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoYXJhY3RlcmlzdGljc0J5VHlwZSB7XG4gIGltcGxpY2l0OiBDaGFyYWN0ZXJpc3RpY1tdO1xuICBzY2FsZWQ6IENoYXJhY3RlcmlzdGljW107XG4gIHNpbmdsZUdyb3VwOiBDaGFyYWN0ZXJpc3RpY1tdO1xuICBtdWx0aUdyb3VwOiBDaGFyYWN0ZXJpc3RpY1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoYXJhY3RlcmlzdGljQWxpYXMge1xuICBpZDogbnVtYmVyO1xuICBjaGFyYWN0ZXJpc3RpY0lkOiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJZGVudGlmaWVkQ2hhcmFjdGVyaXN0aWMge1xuICBleHRlcm5hbENoYXJhY3RlcmlzdGljSWQ6IHN0cmluZyB8IHVuZGVmaW5lZCB8IG51bGw7XG4gIG5hbWU6IHN0cmluZztcbiAgdmFsdWU6IHN0cmluZztcbiAgdHlwZTogc3RyaW5nO1xufVxuIl19