import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroModalPage } from './hero-modal.page';

const routes: Routes = [
  {
    path: '',
    component: HeroModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroModalPageRoutingModule {}
