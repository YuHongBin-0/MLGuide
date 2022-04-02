import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, ToastController, AlertController } from '@ionic/angular';
import { EquipCalcPage } from '../../modals/equip-calc/equip-calc.page';
import { SaveBuildService } from 'src/app/services/save-build.service';

@Component({
  selector: 'app-saved-details',
  templateUrl: './saved-details.page.html',
  styleUrls: ['./saved-details.page.scss'],
})
export class SavedDetailsPage implements OnInit {
  dataReturned: any;
  data: any;
  dummy = []
  savename: any;
  passive = []
  ttCost = 0
  mod: any;


  // for eqp attributes calculation
  atk_spd = 0
  cd_reduc = 0
  crit_chance = 0
  crit_dmg_red = 0
  hp = 0
  hp_regen = 0
  magic_defence = 0
  magic_lifesteal = 0
  magic_pen = 0
  magic_power = 0
  mana = 0
  mana_regen = 0
  movement_spd = 0
  physical_atk = 0
  physical_def = 0
  physical_life = 0
  physical_pen = 0
  buildobj: { name: any; dummy: any[]; passive: any[]; ttCost: number; date: any; };
  enable = false;



  constructor(
    private route: ActivatedRoute,
    private modalController: ModalController,
    private router: Router,
    private serBuild: SaveBuildService,
    public toastController: ToastController,
    private alertController: AlertController,
  ) {
    console.log(this.dummy)
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state;
      }
      console.log(this.data)
      this.dummy = this.data.dummy
      this.ttCost = this.data.ttCost
      this.passive = this.data.passive
      this.savename = this.data.name
      this.mod = this.data.date
    });

  }

  ngOnInit() {
    this.calculate()
  }


  async presentModal(id) {
    this.enable = true;
    const modal = await this.modalController.create({
      component: EquipCalcPage,
      componentProps: {
        "ID": id,
      }

    });
    modal.onDidDismiss().then((dataReturned) => {

      if (dataReturned.data !== undefined) {
        this.dataReturned = dataReturned.data;
        console.log(this.dataReturned)
        // console.log(this.dataReturned.id)
        this.replace(this.dataReturned.id, this.dataReturned.name, this.dataReturned.cost, this.dataReturned.img,
          this.dataReturned.attributes, this.dataReturned.summary)

          
        this.calculate()
      }
    });
    return await modal.present();
  }


  replace(id, name, cost, img, attri, summ) {
    // splice the array... doing replacing object
    this.dummy.splice(id, 1,
      {
        "id": id,
        "name": name,
        "cost": cost,
        "img": img,
        "attributes": attri,
        "summary": summ
      })
  }


  calculate() {

    this.passive = []

    this.atk_spd = 0
    this.cd_reduc = 0
    this.crit_chance = 0
    this.crit_dmg_red = 0
    this.hp = 0
    this.hp_regen = 0
    this.magic_defence = 0
    this.magic_lifesteal = 0
    this.magic_pen = 0
    this.magic_power = 0
    this.mana = 0
    this.mana_regen = 0
    this.movement_spd = 0
    this.physical_atk = 0
    this.physical_def = 0
    this.physical_life = 0
    this.physical_pen = 0

    // total cost
    this.ttCost = 0

    // Loop the cost array and calculate
    this.dummy.forEach((co) => {
      this.ttCost += co.cost
    })

    // Loop the calc array and calculate 
    this.dummy.forEach((te) => {
      // console.log(te.attack_speed)
      this.atk_spd += te.attributes.attack_speed
      this.cd_reduc += te.attributes.cd_reduction
      this.crit_chance += te.attributes.crit_chance
      this.crit_dmg_red += te.attributes.crit_damage_reduction
      this.hp += te.attributes.hp
      this.hp_regen += te.attributes.hp_regen
      this.magic_defence += te.attributes.magic_defense
      this.magic_lifesteal += te.attributes.magic_lifesteal
      this.magic_pen += te.attributes.magic_pen
      this.magic_power += te.attributes.magic_power
      this.mana += te.attributes.mana
      this.mana_regen += te.attributes.mana_regen
      this.movement_spd += te.attributes.movement_spd
      this.physical_atk += te.attributes.physical_atk
      this.physical_def += te.attributes.physical_defense
      this.physical_life += te.attributes.physical_lifesteal
      this.physical_pen += te.attributes.physical_pen
    })

    this.dummy.forEach((te) => {
      if (te.summary != "") {
        this.passive.push(te.summary)
      }
    })
  }

  save() {
    this.buildobj = {
      name: this.savename,
      dummy: this.dummy,
      passive: this.passive,
      ttCost: this.ttCost,
      date: this.mod
    }
    this.serBuild.updateBuild(this.buildobj).then(() => {
      console.log('success')
      this.toastAdd()
    }).catch((er) => {
      console.log(er)
    })
  }
  async toastAdd() {
    const toast = await this.toastController.create({
      message: "Build Updated!",
      color: "secondary",
      duration: 2000
    });
    toast.present();
  }

  async validSave() {
    const alert = await this.alertController.create({
      cssClass: 'eqp-alert',
      header: 'Save build?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          handler: () => {
            this.save()
            console.log('Confirm Okay');
          }
        }
      ]
    });
    await alert.present();
  }
}