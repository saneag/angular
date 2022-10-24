import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  showCalendar = false;
  showText = false;
  showTime = false;

  toggleCalendarChild() {
    if (this.showText) {
      this.showText = false;
      this.showCalendar = true;
    } else if (!this.showText) {
      this.showCalendar = !this.showCalendar;
    }
  }

  toggleTextChild() {
    if (this.showCalendar) {
      this.showCalendar = false;
      this.showText = true;
    } else if (!this.showCalendar) {
      this.showText = !this.showText;
    }
  }

  constructor() {}

  ngOnInit() {}
}
