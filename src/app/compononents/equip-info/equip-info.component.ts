import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-equip-info',
  templateUrl: './equip-info.component.html',
  styleUrls: ['./equip-info.component.scss'],
})
export class EquipInfoComponent implements OnInit {


  data:any
  constructor(
    public navParams : NavParams
  ) { 
    console.log(this.data)
    this.data = this.navParams.get('value')
    console.log(this.navParams.get('value'));
  }

  ngOnInit() {}

}
