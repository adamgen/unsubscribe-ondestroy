import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  title = 'on-destroy-unsubscribe-decorator';
  tempShow = true;
  ngOnInit() {
    setTimeout(() => {
      this.tempShow = false;
    }, 1000);
  }
}
