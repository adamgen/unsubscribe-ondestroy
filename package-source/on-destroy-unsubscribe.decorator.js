"use strict";
exports.__esModule = true;
require("reflect-metadata");
exports.OnDestroyUnsubscribe = function () {
    return function (target, propertyKey) {
        var _val;
        var getter = function () { return _val; };
        var setter = function (newVal) {
            _val = newVal;
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
        var temp = target.ngOnDestroy;
        var wrapper = function () {
            _val.unsubscribe();
            temp();
        };
        target.ngOnDestroy = wrapper.bind(wrapper);
    };
};
//# sourceMappingURL=on-destroy-unsubscribe.decorator.js.map