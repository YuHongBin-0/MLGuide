import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.page.html',
  styleUrls: ['./donation.page.scss'],
})
export class DonationPage implements OnInit {

  constructor(
    private inapp: InAppBrowser
    ) { }

  ngOnInit() {
  }

  paypal() {
    this.inapp.create('https://paypal.me/MLGuide', '_system', 'location=yes')
  }
}
