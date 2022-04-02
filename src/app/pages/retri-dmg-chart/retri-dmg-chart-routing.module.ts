import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RetriDmgChartPage } from './retri-dmg-chart.page';

const routes: Routes = [
  {
    path: '',
    component: RetriDmgChartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RetriDmgChartPageRoutingModule {}
