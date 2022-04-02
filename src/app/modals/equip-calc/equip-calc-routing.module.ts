import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquipCalcPage } from './equip-calc.page';

const routes: Routes = [
  {
    path: '',
    component: EquipCalcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EquipCalcPageRoutingModule {}
