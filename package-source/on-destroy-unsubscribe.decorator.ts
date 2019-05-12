import 'reflect-metadata';
import { Subscription } from 'rxjs';

export const OnDestroyUnsubscribe = function () {
  return function (target: any, propertyKey: string) {
    let _val: Subscription;

    const getter = () => _val;

    const setter = newVal => {
      _val = newVal;
    };

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    });

    const temp = target.ngOnDestroy;
    const wrapper = function () {
      _val.unsubscribe();
      temp();
    };
    target.ngOnDestroy = wrapper.bind(wrapper);
  };
};
