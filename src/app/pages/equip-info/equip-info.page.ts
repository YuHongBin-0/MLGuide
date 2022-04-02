import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import * as firebase from 'firebase/app';
import { Location } from "@angular/common";
import { EmblemInfoPopComponent } from 'src/app/compononents/emblem-info-pop/emblem-info-pop.component';
import { EquipInfoComponent } from 'src/app/compononents/equip-info/equip-info.component';
import { EquipDetailsInfoPage } from '../../modals/equip-details-info/equip-details-info.page';
import { AdMobFree } from '@ionic-native/admob-free/ngx';
import { AdmobService } from 'src/app/services/admob.service';


@Component({
  selector: 'app-equip-info',
  templateUrl: './equip-info.page.html',
  styleUrls: ['./equip-info.page.scss'],
})
export class EquipInfoPage implements OnInit {

  ref = firebase.database().ref('equipments/');
  infos = [];

  attack = []
  magic = []
  defence = []
  movement = []
  jungling = []
  roam = []
  
  tabs = [
    {
      "title": "Attack"
    },
    {
      "title": "Magic"
    },
    {
      "title": "Defence"
    },
    {
      "title": "Movement"
    },
    {
      "title": "Jungling"
    },
    {
      "title": "Roam"
    },
  ]

  constructor(
    private modalCtrl: ModalController,
    public popoverCtrl: PopoverController,
    private addmob: AdMobFree,
    private mobService: AdmobService,
    private location: Location
    
  ) {
    

   }

  ngOnInit() {
    this.ref.on('value', resp => {
      this.infos = snapshotToArray(resp)
      let item = resp.val()
  
      this.attack = item.attack

      this.magic = item.magic

      this.defence = item.defence
 
      this.movement = item.movement

      this.jungling = item.jungling
 
      this.roam = item.roaming
      
    })

  }
  
  ionViewWillLeave() {
    // this.addmob.banner.remove();
  }
  ionViewWillEnter() {
    // this.mobService.BannerAd();
  }
  async notifications(ev: any, item) {  
    console.log("ds")
    const popover = await this.popoverCtrl.create({  
        component: EquipInfoComponent,  
        event: ev,  
        animated: true,  
        cssClass: 'emblem-info-pop',
        showBackdrop: true,
        mode: 'ios',
        componentProps: { value: item}
        
    });  
    
    return await popover.present();  
  }

  async equipDet(data) {
    const modal = await this.modalCtrl.create({
      component: EquipDetailsInfoPage,
      componentProps: {
        "data": data,
      },
      cssClass: 'equip-details-info'
    });
    return await modal.present();
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
