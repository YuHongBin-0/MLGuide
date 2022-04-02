import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmblemInfoPageRoutingModule } from './emblem-info-routing.module';

import { EmblemInfoPage } from './emblem-info.page';
import { SuperTabsModule } from '@ionic-super-tabs/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmblemInfoPageRoutingModule,
    SuperTabsModule,
  ],
  declarations: [EmblemInfoPage]
})
export class EmblemInfoPageModule {}
