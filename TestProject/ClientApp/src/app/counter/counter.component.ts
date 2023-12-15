import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;
  public currentTime = new Date();

  windowInterval: number = window.setInterval(() => {
    this.currentTime = new Date();
    console.log("Hi");
  }, 1000);

  public incrementCounter() {
    this.currentCount++;
  }

  ngOnDestroy() {
      clearInterval(this.windowInterval);
  }

}
