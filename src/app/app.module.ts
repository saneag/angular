import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { CalendarViewComponent } from './pages/home/components/calendar-view/calendar-view.component';
import { TextViewComponent } from './pages/home/components/text-view/text-view.component';
import { ChangeViewButtonsComponent } from './pages/home/change-view-buttons/change-view-buttons.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

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
    LoginComponent,
    SignupComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
