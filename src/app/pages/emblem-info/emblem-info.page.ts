import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonContent, PopoverController } from '@ionic/angular';
import * as firebase from 'firebase/app';
import { EmblemInfoPopComponent } from 'src/app/compononents/emblem-info-pop/emblem-info-pop.component';
import { AdMobFree } from '@ionic-native/admob-free/ngx';
import { AdmobService } from 'src/app/services/admob.service';
@Component({
  selector: 'app-emblem-info',
  templateUrl: './emblem-info.page.html',
  styleUrls: ['./emblem-info.page.scss'],
})

export class EmblemInfoPage implements OnInit {

  
  @ViewChild(IonContent, {static: false}) content: IonContent;
  infos = [];
  physical = []
  magic = []
  tank = []
  jungle = []
  assassin = []
  mage = []
  fighter = []
  support = []
  marksman = []

  ref = firebase.database().ref('emblems/');
  tabs = [
    {
      "title": "Physical",
    },
    {
      "title": "Magic"
    },
    {
      "title": "Tank"
    },
    {
      "title": "Jungle"
    },
    {
      "title": "Assassin"
    },
    {
      "title": "Mage"
    },
    {
      "title": "Fighter"
    },
    {
      "title": "Support"
    },
    {
      "title": "Marksman"
    }
  ]
  constructor(
    private modalCtrl: ModalController,
    public popoverCtrl: PopoverController,
    private addmob: AdMobFree,
    private mobService: AdmobService

  ) {
    
  
  }

  ngOnInit() {
    this.ref.on('value', resp => {
      this.infos = snapshotToArray(resp)
      let item = resp.val()

      this.physical = item.physical

      this.magic = item.magic

      this.tank = item.tank

      this.jungle = item.jungle

      this.assassin = item.assassin

      this.mage = item.mage

      this.fighter = item.fighter

      this.support = item.support

      this.marksman = item.marksman


    })
  }
  ionViewWillLeave() {
    // this.addmob.banner.remove();
  }
  ionViewWillEnter() {
    // this.mobService.BannerAd();
  }
 
  async notifications(ev: any, item) {  
    const popover = await this.popoverCtrl.create({  
        component: EmblemInfoPopComponent,  
        event: ev,  
        animated: true,  
        cssClass: 'emblem-info-pop',
        showBackdrop: true,
        mode: 'ios',
        componentProps: { value: item}
        
    });  
    
    return await popover.present();  
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