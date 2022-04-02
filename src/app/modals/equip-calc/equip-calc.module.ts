import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EquipCalcPageRoutingModule } from './equip-calc-routing.module';

import { EquipCalcPage } from './equip-calc.page';
import { SuperTabsModule } from '@ionic-super-tabs/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EquipCalcPageRoutingModule,
    SuperTabsModule,
  ],
  declarations: [EquipCalcPage]
})
export class EquipCalcPageModule {}
