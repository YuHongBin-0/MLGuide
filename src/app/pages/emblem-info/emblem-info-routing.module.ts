import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmblemInfoPage } from './emblem-info.page';

const routes: Routes = [
  {
    path: '',
    component: EmblemInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmblemInfoPageRoutingModule {}
