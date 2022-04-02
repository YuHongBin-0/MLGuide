import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SavedDetailsPage } from './saved-details.page';

const routes: Routes = [
  {
    path: '',
    component: SavedDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SavedDetailsPageRoutingModule {}
