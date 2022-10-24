import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from '../../pages/signup/signup.component';

const routes: Routes = [{ path: '', component: SignupComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, SignupRoutingModule],
})
export class SignupModule {}
