import { Component, OnInit, ViewChild, Input, ElementRef, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonSlides, ModalController, Platform, NavParams, NavController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser'
import { HeroFirebaseService } from '../../services/hero-firebase.service'
import { ToastController } from '@ionic/angular';
// import { AdmobService } from 'src/app/services/admob.service';

import { AdmobService } from '../../services/admob.service'
import { AdMobFree, AdMobFreeBanner } from '@ionic-native/admob-free/ngx';
import { FavStorageService } from 'src/app/services/fav-storage.service';
import { HeroModalPage } from 'src/app/modals/hero-modal/hero-modal.page';

// import { AnalyticsFirebase } from '@ionic-native/analytics-firebase/ngx';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.page.html',
  styleUrls: ['./hero-details.page.scss'],
})
export class HeroDetailsPage implements OnInit {
  info: any = [];
  avail: boolean;

  @ViewChild('slides', { static: true }) slider: IonSlides;
  @ViewChild('segments', { static: true }) segments;
  @ViewChild('iframe', { static: true }) iframe:ElementRef;

  crucial: any = [];
  firstemblem: any = [];
  secondemblem: any = [];
  battlespell: any = [];
  prioritys: any = [];
  wk_against: any = [];
  strg_against: any = [];
  ctr_eqp: any = [];
  arr_skills = [];
  fav = false;

  passive_vid: string;

  segment = 1; // first enter go to 2 2nd tab
  panelOpenState = false;
  vid_passive;

  key: string;
  name: string;

  slideOpts = {
    autoHeight: true,
    initialSlide: 1, // first enter go to 2nd slide
  };

  favHero: any;
  
  constructor(private route: ActivatedRoute,
    public router: Router,
    private dom: DomSanitizer,
    private fetch: HeroFirebaseService,
    public toastController: ToastController,
    private favSer: FavStorageService,
    public modalController: ModalController,
    private mob: AdmobService,
    private addmob: AdMobFree,
    public platform:Platform,
    public nav: NavController,
    ) {
      // document.addEventListener("fullscreenchange", this.changeHandler, false);
      // document.addEventListener("webkitfullscreenchange", this.changeHandler, false);
      // document.addEventListener("mozfullscreenchange", this.changeHandler, false);

     
    // this.avail = false
    this.key = this.route.snapshot.paramMap.get('key') // declare the key hero
    // console.log(this.key)
    this.fetch.fetchData(this.key);
    this.favSer.isFavorite(this.key).then(isFav => {
      console.log(isFav)
      this.fav = isFav;

    })
      // callback to fetch specific hero from hero-firebase.service using key

     
  }
  // changeHandler(e) {
  //   this.platform.backButton.subscribeWithPriority(1, () => {
  //     alert('cannot hahah')
  //   })
    // Mode has changed.
//  }
  ngOnInit() {
    // this.mob.BannerAd()

    // after initilze, this current page array = fetch.info 
    this.info = this.fetch.info;
    this.name = this.fetch.name;
    this.crucial = this.fetch.crucial;
    this.firstemblem = this.fetch.firstemblem;
    this.secondemblem = this.fetch.secondemblem;
    this.battlespell = this.fetch.battlespell;
    this.prioritys = this.fetch.priorityskills;
    this.wk_against = this.fetch.weak_against;
    this.strg_against = this.fetch.strong_against;
    this.ctr_eqp = this.fetch.counter_equipment;
    this.arr_skills = this.fetch.array_skills;
    this.avail = true;
    
    this.info.skill.passive.video = this.dom.bypassSecurityTrustResourceUrl(this.info.skill.passive.video)
    
    console.log(this.info.skill.passive.video)
    
  }

  
  // async presentModal() {
  //   const modal = await this.modalController.create({
  //     component: HeroModalPage,
  //     componentProps: {
  //       "paramMapKey": "",
  //       "paramIcon": "",
  //     },
  //     cssClass: 'hero-modal'
  //   });
  //   return await modal.present();
  // }
  
 
  ionViewWillLeave() {
    // this.platform.backButton.unsubscribe();
    // this.addmob.banner.remove();  // remove ads banner when on leave
    this.modalController.dismiss()
    //force dismiss all toast when leaving the current page
    this.toastController.dismiss()
    
  }
  // @HostListener('document:backbutton')
  // onBackButton(event) {
  //   event.detail.register(100, async () => {
  //     event.stopImmediatePropagation();
  //     event.stopPropagation();
  //     event.preventDefault();
  //   });
  // }
  ionViewWillEnter() {
    
  }
  ionViewDidEnter() {
    
}
  sanitize(vid) {
    this.vid_passive = this.dom.bypassSecurityTrustResourceUrl(vid);
  }

  async segmentChanged() {
    await this.slider.slideTo(this.segment);
    this.slider.update();
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();

  }
  
  addFav(cond) {
    this.favSer.favoriteHero(this.fetch.favHeroDetails).then(() => {
      console.log(cond)
      this.fav = true;
      this.toastAdd(this.name)
    });
  }

  removeFav(cond) {
    this.favSer.unfavoriteHero(this.key).then(() => {
      this.fav = false;
    });

    console.log(cond)
    this.fav = false
    this.toastRmv(this.name)
  }


  async toastAdd(msg) {
    const toast = await this.toastController.create({
      message: "Added " + msg + " to favourites.",
      color: "secondary",
      duration: 2000
    });
    toast.present();
  }

  async toastRmv(msg) {
    const toast = await this.toastController.create({
      message: "Removed " + msg + " from favourites.",
      color: "secondary",
      duration: 2000
    });
    toast.present();
  }

  autoHeight() {
    setTimeout(() => {
      this.slider.updateAutoHeight()
      this.slider.update();
    }, 300)
  }
}
