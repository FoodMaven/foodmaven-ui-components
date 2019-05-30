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
var ValueWithCharacteristic = /** @class */ (function () {
    function ValueWithCharacteristic(char, val) {
        this.characteristic = char;
        this.value = val;
    }
    /**
     * @return {?}
     */
    ValueWithCharacteristic.prototype.getSearchName = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var displayName = '';
        if (this.value.name !== this.characteristic.name) {
            displayName = this.characteristic.name + ": " + this.value.name;
        }
        else {
            displayName = this.value.name;
        }
        if (this.alias) {
            return displayName + (" (" + this.alias + ")");
        }
        return displayName;
    };
    /**
     * @return {?}
     */
    ValueWithCharacteristic.prototype.getChipName = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var displayName = '';
        if (this.value.name !== this.characteristic.name) {
            displayName = this.characteristic.name + ": " + this.value.name;
        }
        else {
            displayName = this.value.name;
        }
        return displayName;
    };
    return ValueWithCharacteristic;
}());
export { ValueWithCharacteristic };
if (false) {
    /** @type {?} */
    ValueWithCharacteristic.prototype.characteristic;
    /** @type {?} */
    ValueWithCharacteristic.prototype.value;
    /** @type {?} */
    ValueWithCharacteristic.prototype.alias;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcmFjdGVyaXN0aWMubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZm9vZG1hdmVuL2ZtLXVpLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL2NoYXJhY3RlcmlzdGljLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUdFLGNBQWUsY0FBYztJQUM3QixVQUFXLFVBQVU7SUFDckIsT0FBUSxPQUFPO0lBQ2YsYUFBYyxhQUFhOzs7Ozs7QUFHN0Isb0NBUUM7OztJQVBDLDRCQUFXOztJQUNYLDhCQUFhOztJQUNiLDhCQUFhOztJQUNiLG9DQUFtQjs7SUFDbkIsOEJBQTBCOztJQUMxQixnQ0FBZ0I7O0lBQ2hCLGlDQUErQjs7Ozs7QUFHakMsMkNBS0M7OztJQUpDLHlDQUEyQjs7SUFDM0IsdUNBQXlCOztJQUN6Qiw0Q0FBOEI7O0lBQzlCLDJDQUE2Qjs7Ozs7QUFHL0IseUNBSUM7OztJQUhDLGlDQUFXOztJQUNYLCtDQUF5Qjs7SUFDekIsbUNBQWE7Ozs7O0FBR2YsOENBS0M7OztJQUpDLDREQUFvRDs7SUFDcEQsd0NBQWE7O0lBQ2IseUNBQWM7O0lBQ2Qsd0NBQWE7O0FBR2Y7SUFLRSxpQ0FBWSxJQUFvQixFQUFFLEdBQVU7UUFDMUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELCtDQUFhOzs7SUFBYjs7WUFDTSxXQUFXLEdBQUcsRUFBRTtRQUNwQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFO1lBQ2hELFdBQVcsR0FBTSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksVUFBSyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQU0sQ0FBQztTQUNqRTthQUFNO1lBQ0wsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1NBQy9CO1FBRUQsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsT0FBTyxXQUFXLElBQUcsT0FBSyxJQUFJLENBQUMsS0FBSyxNQUFHLENBQUEsQ0FBQztTQUN6QztRQUdELE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCw2Q0FBVzs7O0lBQVg7O1lBQ00sV0FBVyxHQUFHLEVBQUU7UUFDcEIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRTtZQUNoRCxXQUFXLEdBQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLFVBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFNLENBQUM7U0FDakU7YUFBTTtZQUNMLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztTQUMvQjtRQUVELE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7SUFDSCw4QkFBQztBQUFELENBQUMsQUFwQ0QsSUFvQ0M7Ozs7SUFuQ0MsaURBQStCOztJQUMvQix3Q0FBYTs7SUFDYix3Q0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbHVlIH0gZnJvbSAnLi92YWx1ZS5tb2RlbCc7XG5cbmV4cG9ydCBlbnVtIENoYXJhY3RlcmlzdGljVHlwZXMge1xuICBTSU5HTEVfR1JPVVAgPSAnc2luZ2xlIGdyb3VwJyxcbiAgSU1QTElDSVQgPSAnaW1wbGljaXQnLFxuICBTQ0FMRSA9ICdzY2FsZScsXG4gIE1VTFRJX0dST1VQID0gJ211bHRpIGdyb3VwJ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoYXJhY3RlcmlzdGljIHtcbiAgaWQ6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xuICBkZXNjOiBzdHJpbmc7XG4gIGNhdGVnb3J5SWQ6IG51bWJlcjtcbiAgdHlwZTogQ2hhcmFjdGVyaXN0aWNUeXBlcztcbiAgdmFsdWVzOiBWYWx1ZVtdO1xuICBhbGlhc2VzOiBDaGFyYWN0ZXJpc3RpY0FsaWFzW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhcmFjdGVyaXN0aWNzQnlUeXBlIHtcbiAgaW1wbGljaXQ6IENoYXJhY3RlcmlzdGljW107XG4gIHNjYWxlZDogQ2hhcmFjdGVyaXN0aWNbXTtcbiAgc2luZ2xlR3JvdXA6IENoYXJhY3RlcmlzdGljW107XG4gIG11bHRpR3JvdXA6IENoYXJhY3RlcmlzdGljW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhcmFjdGVyaXN0aWNBbGlhcyB7XG4gIGlkOiBudW1iZXI7XG4gIGNoYXJhY3RlcmlzdGljSWQ6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElkZW50aWZpZWRDaGFyYWN0ZXJpc3RpYyB7XG4gIGV4dGVybmFsQ2hhcmFjdGVyaXN0aWNJZDogc3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbDtcbiAgbmFtZTogc3RyaW5nO1xuICB2YWx1ZTogc3RyaW5nO1xuICB0eXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBWYWx1ZVdpdGhDaGFyYWN0ZXJpc3RpYyB7XG4gIGNoYXJhY3RlcmlzdGljOiBDaGFyYWN0ZXJpc3RpYztcbiAgdmFsdWU6IFZhbHVlO1xuICBhbGlhcz86IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihjaGFyOiBDaGFyYWN0ZXJpc3RpYywgdmFsOiBWYWx1ZSkge1xuICAgIHRoaXMuY2hhcmFjdGVyaXN0aWMgPSBjaGFyO1xuICAgIHRoaXMudmFsdWUgPSB2YWw7XG4gIH1cblxuICBnZXRTZWFyY2hOYW1lKCk6IHN0cmluZyB7XG4gICAgbGV0IGRpc3BsYXlOYW1lID0gJyc7XG4gICAgaWYgKHRoaXMudmFsdWUubmFtZSAhPT0gdGhpcy5jaGFyYWN0ZXJpc3RpYy5uYW1lKSB7XG4gICAgICBkaXNwbGF5TmFtZSA9IGAke3RoaXMuY2hhcmFjdGVyaXN0aWMubmFtZX06ICR7dGhpcy52YWx1ZS5uYW1lfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpc3BsYXlOYW1lID0gdGhpcy52YWx1ZS5uYW1lO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmFsaWFzKSB7XG4gICAgICByZXR1cm4gZGlzcGxheU5hbWUgKyBgICgke3RoaXMuYWxpYXN9KWA7XG4gICAgfVxuXG5cbiAgICByZXR1cm4gZGlzcGxheU5hbWU7XG4gIH1cblxuICBnZXRDaGlwTmFtZSgpOiBzdHJpbmcge1xuICAgIGxldCBkaXNwbGF5TmFtZSA9ICcnO1xuICAgIGlmICh0aGlzLnZhbHVlLm5hbWUgIT09IHRoaXMuY2hhcmFjdGVyaXN0aWMubmFtZSkge1xuICAgICAgZGlzcGxheU5hbWUgPSBgJHt0aGlzLmNoYXJhY3RlcmlzdGljLm5hbWV9OiAke3RoaXMudmFsdWUubmFtZX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXNwbGF5TmFtZSA9IHRoaXMudmFsdWUubmFtZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlzcGxheU5hbWU7XG4gIH1cbn1cbiJdfQ==