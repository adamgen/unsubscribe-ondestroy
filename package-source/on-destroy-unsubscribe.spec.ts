import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from '../src/app/app.component';
import { TempComponent } from '../src/app/temp/temp.component';
import { ComponentRef } from '@angular/core';

describe('OnDestroy unsubscribe decorator', () => {
  let fixture: ComponentFixture<TempComponent>;
  let componentRef: ComponentRef<TempComponent>;
  let componentInstance: TempComponent;
  let spyOfOnSubscriptionCalled;

  beforeEach(() => {
    spyOfOnSubscriptionCalled = spyOn(TempComponent.prototype, 'onSubscriptionCalled').and.callFake(() => {
      console.log('fake call');
    });

    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TempComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(TempComponent);
    componentRef = fixture.componentRef;
    componentInstance = componentRef.instance;
  });

  it('will perform a basic unsubscribe on component destroy', async () => {
    expect(componentInstance.subscriptionProp.closed).toBe(false);
    fixture.destroy();
    expect(componentInstance.subscriptionProp.closed).toBe(true);
  });

  it('will execute subscription until the component is destroyed and stop executing later', async () => {
    const callTimes = 10;
    componentInstance.onSubscriptionCalled = () => { };
    await new Promise(resolve => setTimeout(resolve, callTimes * 100));
    fixture.destroy();
    await new Promise(resolve => setTimeout(resolve, callTimes * 100));
    expect(spyOfOnSubscriptionCalled).toHaveBeenCalledTimes(callTimes);
  });

});
