
import { Storage } from '@ionic/storage';
import { Platform, NavController, IonSlides } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet, Router, ActivationStart } from '@angular/router';
@Component({
  selector: 'app-intro-slides',
  templateUrl: './intro-slides.page.html',
  styleUrls: ['./intro-slides.page.scss'],
})
export class IntroSlidesPage {
  @ViewChild('slides', { static: true }) slider: IonSlides;
  segment = 0;  
  footer = false;
  constructor(private storage: Storage, 
    private router: Router, 
    private navCtrl: NavController,
    private platform: Platform) { 
    
    }

    async finish() {
      await this.storage.set('tutorialComplete1', true);
      this.router.navigateByUrl('/', { replaceUrl: true })

    }
    async segmentChanged(ev: any) {  
      await this.slider.slideTo(this.segment);  
    }  
    async slideChanged(ev:any) {
      this.segment = await this.slider.getActiveIndex();  
      
      if (this.segment == 2) {
        this.footer = true
      } else {
        this.footer = false
      }
    }  
}
