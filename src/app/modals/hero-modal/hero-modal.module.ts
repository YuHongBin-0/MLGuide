import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeroModalPageRoutingModule } from './hero-modal-routing.module';

import { HeroModalPage } from './hero-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeroModalPageRoutingModule
  ],
  declarations: [HeroModalPage]
})
export class HeroModalPageModule {}
