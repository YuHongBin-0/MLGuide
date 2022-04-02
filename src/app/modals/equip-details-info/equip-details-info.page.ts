import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-equip-details-info',
  templateUrl: './equip-details-info.page.html',
  styleUrls: ['./equip-details-info.page.scss'],
})
export class EquipDetailsInfoPage implements OnInit {
  atrib;
  data: any;
  constructor(
    private navParams: NavParams,
    private modalCtrl: ModalController,
  ) { 
    this.data = this.navParams.get('data')
    this.atrib = this.data.attributes
    console.log(this.data.attributes)
  }

  ngOnInit() {
  }

}
