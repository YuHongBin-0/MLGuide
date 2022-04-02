import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtherDetailsPageRoutingModule } from './other-details-routing.module';

import { OtherDetailsPage } from './other-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtherDetailsPageRoutingModule
  ],
  declarations: [OtherDetailsPage]
})
export class OtherDetailsPageModule {}
