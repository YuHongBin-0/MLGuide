import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-emblem-info-pop',
  templateUrl: './emblem-info-pop.component.html',
  styleUrls: ['./emblem-info-pop.component.scss'],
})
export class EmblemInfoPopComponent implements OnInit {

  data:any
  constructor(
    public navParams : NavParams
  ) { 
    this.data = this.navParams.get('value')
    console.log(this.navParams.get('value'));
  }

  ngOnInit() {}

}
