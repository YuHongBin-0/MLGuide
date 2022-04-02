import { Injectable } from '@angular/core';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig, AdMobFreeRewardVideoConfig } from '@ionic-native/admob-free/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AdmobService {

click = 0
tabC = 0
clicked = true

  //Interstitial Ad's Configurations
  interstitialConfig: AdMobFreeInterstitialConfig = {
    isTesting: true, // Remove in release version
    autoShow: false,
    // id: "ca-app-pub-1027096059722160/5366110540"
  };

  //Reward Video Ad's Configurations
  // RewardVideoConfig: AdMobFreeRewardVideoConfig = {
  //   // isTesting: true, // Remove in release version
  //   autoShow: false,
  //   id: "ca-app-pub-1027096059722160/4684224895"
  // };

  constructor(private admobFree: AdMobFree, public platform: Platform) {

    platform.ready().then(() => {

      // Load ad configuration
      this.admobFree.interstitial.config(this.interstitialConfig);
      //Prepare Ad to Show
      this.admobFree.interstitial.prepare().then(() => { }).catch(e => alert(e));


      // this.admobFree.rewardVideo.config(this.RewardVideoConfig);   // Load ad configuration
      // this.admobFree.rewardVideo.prepare().then(() => { }).catch(e => alert(e));  // Prepare Ad to Show

    });

    //Handle interstitial's close event to Prepare Ad again
    this.admobFree.on('admob.interstitial.events.CLOSE').subscribe(() => {
      this.admobFree.interstitial.prepare().then(() => {
        //  alert("Interstitial CLOSE");
         }).catch(e => alert(e));
    });

    //Handle Reward's close event to Prepare Ad again
    this.admobFree.on('admob.rewardvideo.events.CLOSE').subscribe(() => {
      this.admobFree.rewardVideo.prepare()
        .then(() => {
          // alert("Reward Video CLOSE");
        }).catch(e => alert(e));
    });
  }

  InterstitialAd() {
    //Check if Ad is loaded
    this.admobFree.interstitial.isReady().then(() => {
      //Will show prepared Ad
      this.admobFree.interstitial.show().then(() => {
        console.log("success")
      })
        .catch(e => alert("show " + e));
    })
      .catch(e => alert("isReady " + e));
  }

  // RewardVideoAd() {
  //   //Check if Ad is loaded
  //   this.admobFree.rewardVideo.isReady().then(() => {
  //     //Will show prepared Ad
  //     this.admobFree.rewardVideo.show().then(() => {
  //       console.log("success")
  //     })
  //       .catch(e => alert("show " + e));
  //   })
  //     .catch(e => alert("isReady " + e));
  // }

  BannerAd() {
    let bannerConfig: AdMobFreeBannerConfig = {
      isTesting: true, // Remove in release version
      autoShow: true,
      // id: "ca-app-pub-1027096059722160/4908969061"
    };
    this.admobFree.banner.config(bannerConfig);

    this.admobFree.banner.prepare().then(() => {
      console.log("success")
    
      // success
    }).catch(e => alert(e));

  }


  clicks() {

    if(this.clicked == true) {
      this.InterstitialAd();
      this.clicked = false; // disable for 120sec secs
      setTimeout(() => {
        this.clicked = true // after 120sec secs reset to true
      }, 120000); // 120sec
    }
  }




}