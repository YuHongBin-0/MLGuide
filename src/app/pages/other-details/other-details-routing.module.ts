import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtherDetailsPage } from './other-details.page';

const routes: Routes = [
  {
    path: '',
    component: OtherDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtherDetailsPageRoutingModule {}
