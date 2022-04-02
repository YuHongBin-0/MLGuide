import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IntroGuard } from './guards/intro.guard';
const routes: Routes = [

  { path: '',  redirectTo: 'tabs', pathMatch: 'full' },
  {
    path: 'tabs',
    canActivate: [IntroGuard],
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
  },
  {
    path: 'hero-details/:key',
    loadChildren: () => import('./pages/hero-details/hero-details.module').then( m => m.HeroDetailsPageModule),
    
  },
  {
    path: 'other-details',
    loadChildren: () => import('./pages/other-details/other-details.module').then( m => m.OtherDetailsPageModule)
  },  
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro-slides/intro-slides.module').then( m => m.IntroSlidesPageModule)
  },
  {
    path: 'search-hero',
    loadChildren: () => import('./pages/search-hero/search-hero.module').then( m => m.SearchHeroPageModule)
  },
  {
    path: 'hero-modal',
    loadChildren: () => import('./modals/hero-modal/hero-modal.module').then( m => m.HeroModalPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./modals/contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
  {
    path: 'equip-calc',
    loadChildren: () => import('./modals/equip-calc/equip-calc.module').then( m => m.EquipCalcPageModule)
  },
  {
    path: 'emblem-info',
    loadChildren: () => import('./pages/emblem-info/emblem-info.module').then( m => m.EmblemInfoPageModule)
  },
  {
    path: 'equipment-calc',
    loadChildren: () => import('./pages/equipment-calc/equipment-calc.module').then( m => m.EquipmentCalcPageModule)
  },
  {
    path: 'retri-dmg-chart',
    loadChildren: () => import('./pages/retri-dmg-chart/retri-dmg-chart.module').then( m => m.RetriDmgChartPageModule)
  },
  {
    path: 'equip-info',
    loadChildren: () => import('./pages/equip-info/equip-info.module').then( m => m.EquipInfoPageModule)
  },
  {
    path: 'donation',
    loadChildren: () => import('./pages/donation/donation.module').then( m => m.DonationPageModule)
  },
  {
    path: 'equip-details-info',
    loadChildren: () => import('./modals/equip-details-info/equip-details-info.module').then( m => m.EquipDetailsInfoPageModule)
  },
  {
    path: 'saved-build',
    loadChildren: () => import('./pages/saved-build/saved-build.module').then( m => m.SavedBuildPageModule)
  },
  {
    path: 'saved-details',
    loadChildren: () => import('./pages/saved-details/saved-details.module').then( m => m.SavedDetailsPageModule)
  },




];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
