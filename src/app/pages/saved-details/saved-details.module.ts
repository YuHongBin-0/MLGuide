import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SavedDetailsPageRoutingModule } from './saved-details-routing.module';

import { SavedDetailsPage } from './saved-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SavedDetailsPageRoutingModule
  ],
  declarations: [SavedDetailsPage]
})
export class SavedDetailsPageModule {}
