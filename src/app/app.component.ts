import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HeroFirebaseService } from './services/hero-firebase.service'
import { NetworkCheckService } from './services/network-check.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private network: NetworkCheckService,
    private fetch: HeroFirebaseService,
  ) {
    this.initializeApp();
    
  }

  initializeApp() {

    this.platform.ready().then(() => {

      this.statusBar.styleLightContent(); // modified to light text
      this.network.initializeNetworkEvents();
      this.splashScreen.hide();

    });
  }
}
