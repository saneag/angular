import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from '../../pages/contact/contact.component';
import { ContactRoutingModule } from './contact-routing.module';

const routes: Routes = [{ path: '', component: ContactComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, ContactRoutingModule],
})
export class ContactModule {}
