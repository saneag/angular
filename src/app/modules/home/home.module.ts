import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';

import { HomeComponent } from '../../pages/home/home.component';
import { HomeRoutingModule } from './home-routing.module';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
