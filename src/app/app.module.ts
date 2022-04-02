import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicStorageModule } from '@ionic/storage';
// import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { Network } from '@ionic-native/network/ngx'
import { AdMobFree } from '@ionic-native/admob-free/ngx';
import { AdmobService } from './services/admob.service'
import { HeroModalPageModule } from './modals/hero-modal/hero-modal.module';
import { IonBottomDrawerModule } from 'ion-bottom-drawer';
import { SuperTabsModule } from '@ionic-super-tabs/angular'

import {DatePipe} from '@angular/common';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import * as firebase from 'firebase';
import { ContactUsPageModule } from './modals/contact-us/contact-us.module';
import { EquipCalcPageModule } from './modals/equip-calc/equip-calc.module';
import { EmblemInfoPageModule } from './pages/emblem-info/emblem-info.module';
import { EmblemInfoPopComponent } from './compononents/emblem-info-pop/emblem-info-pop.component';
import { EquipInfoPageModule } from './pages/equip-info/equip-info.module';
import { EquipInfoComponent } from './compononents/equip-info/equip-info.component';
import { EquipDetailsInfoPageModule } from './modals/equip-details-info/equip-details-info.module';


    firebase.initializeApp(environment.firebase);
@NgModule({
  declarations: [AppComponent, EmblemInfoPopComponent, EquipInfoComponent],
  entryComponents: [EmblemInfoPopComponent, EquipInfoComponent],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    IonicStorageModule.forRoot(),
    SuperTabsModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule, 
    HeroModalPageModule,
    ContactUsPageModule,
    EquipCalcPageModule,
    EmblemInfoPageModule,
    EquipInfoPageModule,
    EquipDetailsInfoPageModule,
    IonBottomDrawerModule,
  ],
  providers: [
    StatusBar,
    DatePipe,
    SplashScreen,
    Network,
    InAppBrowser,
    DatePipe,
    AdMobFree,
    AdmobService,
    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}


