import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RetriDmgChartPageRoutingModule } from './retri-dmg-chart-routing.module';

import { RetriDmgChartPage } from './retri-dmg-chart.page';

import {MatTableModule} from '@angular/material/table';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RetriDmgChartPageRoutingModule,
    MatTableModule
  ],
  declarations: [RetriDmgChartPage]
})
export class RetriDmgChartPageModule {}
