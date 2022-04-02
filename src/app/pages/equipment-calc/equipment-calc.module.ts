import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EquipmentCalcPageRoutingModule } from './equipment-calc-routing.module';

import { EquipmentCalcPage } from './equipment-calc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EquipmentCalcPageRoutingModule
  ],
  declarations: [EquipmentCalcPage]
})
export class EquipmentCalcPageModule {}
