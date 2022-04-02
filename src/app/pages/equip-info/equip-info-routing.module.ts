import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquipInfoPage } from './equip-info.page';

const routes: Routes = [
  {
    path: '',
    component: EquipInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EquipInfoPageRoutingModule {}
