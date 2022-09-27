import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from '../app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { CalendarViewComponent } from '../calendar-view/calendar-view.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    FooterComponent,
    CalendarViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
