import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import {AboutComponent} from "./about.component";
import {AboutRoutingModule} from "./about-routing.module";

const routes: Routes = [
  {path: '', component: AboutComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
