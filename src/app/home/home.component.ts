import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showTime = false;
  currentDate = new Date().toLocaleDateString('en-GB').replace(/\//g, '-');

  time = new Date();
  intervalId = 0;

  toggleShowTime() {
    this.showTime = !this.showTime;
    if(this.showTime) {
      this.time = new Date();
      this.intervalId = setInterval(() => {
        this.time = new Date();
      }, 1000);
    }
    else {
      clearInterval(this.intervalId);
    }
  }

  constructor() {
  }

  ngOnInit() {

  }
}
