import { Component, OnInit, OnDestroy } from '@angular/core';
import { OnDestroyUnsubscribe } from '../on-destroy-unsubscribe.decorator';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styles: []
})
export class TempComponent implements OnInit, OnDestroy {

  constructor() { }

  @OnDestroyUnsubscribe()
  subscriptionProp = interval(100).subscribe(this.onSubscriptionCalled);

  ngOnInit() {
    console.log('oninit');
  }

  ngOnDestroy() {
    console.log('component ngOnDestroy');
  }

  onSubscriptionCalled() {
    console.log('val');
  }
}
