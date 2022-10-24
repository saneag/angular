import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
      <main>
        <p [className]="'progress_placeholder'">Contact page under construction...</p>
      </main>
  `,
  styles: [`
    main{
      display: flex;
      justify-content: center;
      align-items: center;
      .progress_placeholder{
        font-size: 2rem;
        font-family: Comfortaa, sans-serif;
        color: #fff;
      }
    }
  `]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
