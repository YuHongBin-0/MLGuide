import { Component, OnInit, ViewChild } from '@angular/core';
import { SuperTabs } from '@ionic-super-tabs/angular';
import { SuperTabChangeEventDetail } from '@ionic-super-tabs/core';
import { ModalController, NavParams } from '@ionic/angular';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-equip-calc',
  templateUrl: './equip-calc.page.html',
  styleUrls: ['./equip-calc.page.scss'],
})
export class EquipCalcPage implements OnInit {

  id: number;
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
    private navParams: NavParams,

  ) { }
  

  ngOnInit() {
    console.log(this.navParams.data.ID)
    this.id = this.navParams.data.ID

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

  details(attri, cost, name, eqp, summ) {

    console.log(attri + " " + cost + " " + name + " " + eqp + " " + summ)

    this.modalCtrl.dismiss({
      "id": this.id,
      "name": name,
      "cost": cost,
      "img": eqp,
      "attributes": attri,
      "summary": summ
    })
  }

  close() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss();
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