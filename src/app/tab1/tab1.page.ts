import { Component, OnInit } from '@angular/core';
import { AdmobService } from '../services/admob.service'
import { FavStorageService, Hero } from '../services/fav-storage.service';
import { HeroFirebaseService } from '../services/hero-firebase.service'
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { NavController } from '@ionic/angular';
import { AdMobFree } from '@ionic-native/admob-free/ngx';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  infos = [];
  ref = firebase.database().ref('heroes/');
  avail = true
  
  favHeroes: Hero[] = [];


  constructor(
    private favSer: FavStorageService,
    private tryd: HeroFirebaseService,
    private router: Router,
    private navCtrl: NavController,
    private addmob: AdMobFree,
    private mobService: AdmobService
  ) {
    



  }

  ngOnInit() {
    
    this.ref.on('value', resp => {
      this.infos = snapshotToArray(resp)
      this.favSer.getAllFavoriteFilms().then((list) => {
        let obj = []
        if (list) {

          list.forEach(element => {

            obj.push(element)
          });
          this.favHeroes = obj
          this.checkAvail()

          console.log(this.favHeroes)
        }

      })
    })
  }
  // clickInter() {
  //   this.mobService.clicks()
  // }

  // clickReward() {
  //   this.mobService.RewardVideoAd()
  // }


  ionViewWillEnter() {

    console.log("triggered")
    this.favSer.getAllFavoriteFilms().then((list) => {
      let obj = []
      if (list) {
        list.forEach(element => {
          obj.push(element)
        });

        if (obj.length !== this.favHeroes.length) {
          console.log("run again")
          this.ngOnInit()
        }
      }
    })
  }

  details(key) {
    this.navCtrl.navigateForward(['/hero-details/' + key])
    this.mobService.clicks()
  }
  doRefresh(event) {
    console.log('Begin async operation');
    this.ref.on('value', resp => {
      this.infos = snapshotToArray(resp)
      this.favSer.getAllFavoriteFilms().then((list) => {
        let obj = []

        list.forEach(element => {

          obj.push(element)
        });
        this.favHeroes = obj
        console.log(this.favHeroes)
        this.checkAvail()
        console.log('Async operation has ended');
        event.target.complete();
      })
    })
  }

  checkAvail() {
    if (this.favHeroes.length == 0) {
      console.log('true')
      this.avail = true
    } else {
      console.log('false')
      this.avail = false
    }
  }

}
export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
    let item = childSnapshot.val();
    item.key = childSnapshot.key;
    returnArr.push(item);
  });

  return returnArr;
};