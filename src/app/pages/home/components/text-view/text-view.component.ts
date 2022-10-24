import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-text-view',
  template: `
    <div [className]="'date_container'">
      <p [className]="'date date_caption'">Today is:</p>
      <p [className]="'date'">{{ currentDate }}</p>
      <button [className]="'time_button'" (click)="toggleShowTime()">
        {{ showTime == false ? 'Click to see time' : 'Current time: ' }}
        <span *ngIf="showTime">{{ time | date: 'hh:mm:ss a' }}</span>
      </button>
    </div>
  `,
  styles: [
    `
      .date_container {
        display: flex;
        align-items: center;
        flex-direction: column;

        .date {
          color: #fff;
          font-size: 4rem;
          letter-spacing: 10px;
          font-family: Neonderthaw, sans-serif;
          text-shadow: 2px 2px 5px #f637ec;
        }

        .date_caption {
          font-size: 2rem;
        }

        .time_button {
          margin-top: 20px;
          background-color: #6820ec;
          color: #fff;
          font-family: Comfortaa, sans-serif;
          padding: 10px 20px;
          border-radius: 10px;
          font-size: 1.5rem;
        }
      }
    `,
  ],
})
export class TextViewComponent implements OnInit {
  @Input() showTime = false;

  currentDate = new Date().toLocaleDateString('en-GB').replace(/\//g, '-');

  time = new Date();
  intervalId = 0;

  constructor() {}

  ngOnInit(): void {}

  toggleShowTime() {
    this.showTime = !this.showTime;
    if (this.showTime) {
      this.time = new Date();
      this.intervalId = setInterval(() => {
        this.time = new Date();
      }, 1000);
    } else {
      clearInterval(this.intervalId);
    }
  }
}
