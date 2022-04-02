import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SavedBuildPageRoutingModule } from './saved-build-routing.module';

import { SavedBuildPage } from './saved-build.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SavedBuildPageRoutingModule
  ],
  declarations: [SavedBuildPage]
})
export class SavedBuildPageModule {}
