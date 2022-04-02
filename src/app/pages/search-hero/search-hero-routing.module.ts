import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchHeroPage } from './search-hero.page';

const routes: Routes = [
  {
    path: '',
    component: SearchHeroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchHeroPageRoutingModule {}
