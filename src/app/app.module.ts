import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HeaderComponent } from './modules/header/header.component';
import { FooterComponent } from './modules/footer/footer.component';
import { CalendarViewComponent } from './home/components/calendar-view/calendar-view.component';
import { TextViewComponent } from './home/components/text-view/text-view.component';
import { ChangeViewButtonsComponent } from './home/change-view-buttons/change-view-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    FooterComponent,
    CalendarViewComponent,
    TextViewComponent,
    TextViewComponent,
    ChangeViewButtonsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
