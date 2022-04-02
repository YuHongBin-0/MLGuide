import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EquipInfoPageRoutingModule } from './equip-info-routing.module';

import { EquipInfoPage } from './equip-info.page';
import { SuperTabsModule } from '@ionic-super-tabs/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EquipInfoPageRoutingModule,
    SuperTabsModule,
  ],
  declarations: [EquipInfoPage]
})
export class EquipInfoPageModule {}
