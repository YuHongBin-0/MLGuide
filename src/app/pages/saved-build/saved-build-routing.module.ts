import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SavedBuildPage } from './saved-build.page';

const routes: Routes = [
  {
    path: '',
    component: SavedBuildPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SavedBuildPageRoutingModule {}
