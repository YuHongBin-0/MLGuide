import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchHeroPageRoutingModule } from './search-hero-routing.module';

import { SearchHeroPage } from './search-hero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchHeroPageRoutingModule
  ],
  declarations: [SearchHeroPage]
})
export class SearchHeroPageModule {}
