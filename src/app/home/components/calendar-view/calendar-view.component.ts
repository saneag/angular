import { Component, OnInit } from '@angular/core';
import { CalendarCreator } from '../../../service/calendarCreator.service';
import { Day } from '../../../models/day.model';

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.scss'],
})
export class CalendarViewComponent implements OnInit {
  monthDays: Day[];

  monthNumber: number;
  year: number;

  weekDaysName: string[] = [];

  currentDay = new Date().getDate();

  constructor(public calendarCreator: CalendarCreator) {}

  ngOnInit(): void {
    this.setMonthDays(this.calendarCreator.getCurrentMonth());

    this.weekDaysName.push('Sun');
    this.weekDaysName.push('Mon');
    this.weekDaysName.push('Tue');
    this.weekDaysName.push('Wed');
    this.weekDaysName.push('Thu');
    this.weekDaysName.push('Fri');
    this.weekDaysName.push('Sat');
  }

  private setMonthDays(days: Day[]): void {
    this.monthDays = days;
    this.monthNumber = this.monthDays[0].monthIndex;
    this.year = this.monthDays[0].year;
  }
}
