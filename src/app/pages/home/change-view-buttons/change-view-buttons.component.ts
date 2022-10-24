import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-change-view-buttons',
  templateUrl: './change-view-buttons.component.html',
  styleUrls: ['./change-view-buttons.component.scss'],
})
export class ChangeViewButtonsComponent implements OnInit {
  @Output() toggleCalendar = new EventEmitter();
  @Output() toggleText = new EventEmitter();

  toggleCalendarChild() {
    this.toggleCalendar.emit();
  }

  toggleTextChild() {
    this.toggleText.emit();
  }

  constructor() {}

  ngOnInit(): void {}
}
