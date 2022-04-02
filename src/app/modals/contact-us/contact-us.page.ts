import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AdmobService } from 'src/app/services/admob.service';
import { AdMobFree } from '@ionic-native/admob-free/ngx';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private mob: AdmobService,
    private addmob: AdMobFree
  ) { }

  ngOnInit() {
    // this.mob.BannerAd()
  }
  close() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  ionViewWillLeave() {
    // this.addmob.banner.remove();
  }
}
