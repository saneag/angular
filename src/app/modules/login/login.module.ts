import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from '../../pages/login/login.component';

const routes: Routes = [{ path: '', component: LoginComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, LoginRoutingModule],
})
export class LoginModule {}
