import { Component, OnInit } from '@angular/core';
import { LINKS } from '../shared/CONSTANTS';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  LINKS = LINKS;
}
