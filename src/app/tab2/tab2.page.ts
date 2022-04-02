import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

import { IonSlides } from '@ionic/angular'
import { HeroFirebaseService } from '../services/hero-firebase.service'
import { AdmobService } from '../services/admob.service';
import { DatePipe } from '@angular/common';
import { HomeTabService } from '../services/home-tab.service';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  banner: any;
  currentdate: any;

  slideOpts = { loop: true };
  infos = [];
  ref = firebase.database().ref('heroes/');
  ref2 = firebase.database().ref('slide/');
  slide = []
  options: InAppBrowserOptions = {
    location: 'yes',
    hidden: 'no',
    // clearcache: 'yes',
    // clearsessioncache: 'yes',
    // cleardata: 'yes', // iOS only
    zoom: 'no', // Android only
    hardwareback: 'yes', // Android only, navigate backwards through the InAppBrowser's history
    mediaPlaybackRequiresUserAction: 'yes',
    lefttoright: 'yes', // navigation buttons go to the left and close button to the right
    shouldPauseOnSuspend: 'yes', // Android only, make InAppBrowser WebView to pause/resume with the app to stop background audio
    hideurlbar: 'yes', // Android only, hide the url bar on the location toolbar
    // toolbar: 'yes', // iOS only
    toolbarcolor: '#1b1b1b',
    navigationbuttoncolor: 'red',
    footercolor: 'white', // Android only
    hidenavigationbuttons: 'yes',
    closebuttoncolor: '#CABD24',
    toolbarposition: 'bottom',
    allowInlineMediaPlayback: 'yes',
    enableViewportScale: 'yes',
    // disallowoverscroll: 'yes'
    // closebuttoncaption: 'Close',
  }
  constructor(private fetch: HeroFirebaseService,
    private datePipe: DatePipe,
    private mobSer: AdmobService,
    private homeService: HomeTabService,
    private iab: InAppBrowser

  ) {}

  ngOnInit() {
   
    var date = new Date();
    this.currentdate = this.datePipe.transform(date, "yyMMddHHmm")

    var banner = +this.currentdate;
    if (banner < 3009201600) {  // COUNTDOWN BANNER!
      this.coutndown();
      console.log('pass')
      this.banner = true
    } // bring down banner after time passes
    this.ref2.on('value', resp => {
      this.slide = snapshotToArray1(resp)
    })

    this.ref.on('value', resp => {
      this.infos = snapshotToArray(resp)
    })
  }

  open(youtube) {
    this.iab.create(youtube, "_blank", this.options);
  }


  coutndown() {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;
    let countDown = new Date('September 30, 2020 16:00:00').getTime(), // 'Jan 09, 2020 10:00:00'
      x = setInterval(function () {
        let now = new Date().getTime(),
          distance = countDown - now;

        this.document.getElementById('days').innerText = Math.floor(distance / (day)),
          this.document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
          this.document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
          this.document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
      }, second)
  }

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }
  clickE() {
    this.mobSer.clicks()
  }


}

// Export for firebase

export const snapshotToArray = snapshot => {  // for heroes
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
    let item = childSnapshot.val();
    item.key = childSnapshot.key;
    returnArr.push(item);
  });

  return returnArr.reverse();
};

export const snapshotToArray1 = snapshot => { // for slides
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
    let item = childSnapshot.val();
    item.key = childSnapshot.key;
    returnArr.push(item);
  });

  return returnArr.reverse();
};