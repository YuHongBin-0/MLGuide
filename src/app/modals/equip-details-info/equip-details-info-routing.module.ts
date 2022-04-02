import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquipDetailsInfoPage } from './equip-details-info.page';

const routes: Routes = [
  {
    path: '',
    component: EquipDetailsInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EquipDetailsInfoPageRoutingModule {}
