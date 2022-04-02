import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroDetailsPage } from './hero-details.page';


const routes: Routes = [
  {
    path: '',
    component: HeroDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroDetailsPageRoutingModule {}
