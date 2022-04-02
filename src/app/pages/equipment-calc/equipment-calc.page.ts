import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, ToastController, NavController } from '@ionic/angular';
import { EquipCalcPage } from '../../modals/equip-calc/equip-calc.page';
import { SaveBuildService } from 'src/app/services/save-build.service';
import { DatePipe } from '@angular/common';
import { stringify } from 'querystring';

@Component({
  selector: 'app-equipment-calc',
  templateUrl: './equipment-calc.page.html',
  styleUrls: ['./equipment-calc.page.scss'],
})
export class EquipmentCalcPage implements OnInit {

  buildobj = {};
  dataReturned: any;
  savename: any;
  enable= true;
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
  //  End of eqp attributes calculation 

  calc = [] // calculation attributes
  passive = []
  cost = [] // calculate for cost of attributes
  ttCost = 0

  dummy = []
  attri = false;
  constructor(
    private modalController: ModalController,
    private alertController: AlertController,
    private serBuild: SaveBuildService,
    private datepipie: DatePipe,
    public toastController: ToastController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.dummy = [
      {
        "id": 0,
        "name": "",
        "cost": 0,
        "img": "",
        "attributes": {
          "attack_speed": 0,
          "cd_reduction": 0,
          "crit_chance": 0,
          "crit_damage_reduction": 0,
          "hp": 0,
          "hp_regen": 0,
          "magic_defense": 0,
          "magic_lifesteal": 0,
          "magic_pen": 0,
          "magic_power": 0,
          "mana": 0,
          "mana_regen": 0,
          "movement_spd": 0,
          "physical_atk": 0,
          "physical_defense": 0,
          "physical_lifesteal": 0,
          "physical_pen": 0
        },
        "summary": ""
      },
      {
        "id": 1,
        "name": "",
        "cost": 0,
        "img": "",
        "attributes": {
          "attack_speed": 0,
          "cd_reduction": 0,
          "crit_chance": 0,
          "crit_damage_reduction": 0,
          "hp": 0,
          "hp_regen": 0,
          "magic_defense": 0,
          "magic_lifesteal": 0,
          "magic_pen": 0,
          "magic_power": 0,
          "mana": 0,
          "mana_regen": 0,
          "movement_spd": 0,
          "physical_atk": 0,
          "physical_defense": 0,
          "physical_lifesteal": 0,
          "physical_pen": 0
        },
        "summary": ""
      },
      {
        "id": 2,
        "name": "",
        "cost": 0,
        "img": "",
        "attributes": {
          "attack_speed": 0,
          "cd_reduction": 0,
          "crit_chance": 0,
          "crit_damage_reduction": 0,
          "hp": 0,
          "hp_regen": 0,
          "magic_defense": 0,
          "magic_lifesteal": 0,
          "magic_pen": 0,
          "magic_power": 0,
          "mana": 0,
          "mana_regen": 0,
          "movement_spd": 0,
          "physical_atk": 0,
          "physical_defense": 0,
          "physical_lifesteal": 0,
          "physical_pen": 0
        },
        "summary": ""
      },
      {
        "id": 3,
        "name": "",
        "cost": 0,
        "img": "",
        "attributes": {
          "attack_speed": 0,
          "cd_reduction": 0,
          "crit_chance": 0,
          "crit_damage_reduction": 0,
          "hp": 0,
          "hp_regen": 0,
          "magic_defense": 0,
          "magic_lifesteal": 0,
          "magic_pen": 0,
          "magic_power": 0,
          "mana": 0,
          "mana_regen": 0,
          "movement_spd": 0,
          "physical_atk": 0,
          "physical_defense": 0,
          "physical_lifesteal": 0,
          "physical_pen": 0
        },
        "summary": ""
      },
      {
        "id": 4,
        "name": "",
        "cost": 0,
        "img": "",
        "attributes": {
          "attack_speed": 0,
          "cd_reduction": 0,
          "crit_chance": 0,
          "crit_damage_reduction": 0,
          "hp": 0,
          "hp_regen": 0,
          "magic_defense": 0,
          "magic_lifesteal": 0,
          "magic_pen": 0,
          "magic_power": 0,
          "mana": 0,
          "mana_regen": 0,
          "movement_spd": 0,
          "physical_atk": 0,
          "physical_defense": 0,
          "physical_lifesteal": 0,
          "physical_pen": 0
        },
        "summary": ""
      },
      {
        "id": 5,
        "name": "",
        "cost": 0,
        "img": "",
        "attributes": {
          "attack_speed": 0,
          "cd_reduction": 0,
          "crit_chance": 0,
          "crit_damage_reduction": 0,
          "hp": 0,
          "hp_regen": 0,
          "magic_defense": 0,
          "magic_lifesteal": 0,
          "magic_pen": 0,
          "magic_power": 0,
          "mana": 0,
          "mana_regen": 0,
          "movement_spd": 0,
          "physical_atk": 0,
          "physical_defense": 0,
          "physical_lifesteal": 0,
          "physical_pen": 0
        },
        "summary": ""
      }
    ]

    // this.dummy.splice(2, 1, {"id": 2, "img": ""});
    // this.dummy.splice(1, 1, {"id": 1, "img": "https://firebasestorage.googleapis.com/v0/b/mlguide-ad541.appspot.com/o/equipment%2Fatt%203%20rose%20gold%20meteor.png?alt=media&token=1c673f62-e029-473f-9920-439338731113"});
  }



  async presentModal(id) {
    const modal = await this.modalController.create({
      component: EquipCalcPage,
      componentProps: {
        "ID": id,
      }

    });
    modal.onDidDismiss().then((dataReturned) => {

      if (dataReturned.data !== undefined) {
        this.enable = false
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


  reset() {
    this.enable = true

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

    console.log("reset")

    this.attri = false
    this.dummy = []
    this.passive = []
    this.ttCost = 0
    this.dummy = [
      {
        "id": 0,
        "name": "",
        "cost": 0,
        "img": "",
        "attributes": {
          "attack_speed": 0,
          "cd_reduction": 0,
          "crit_chance": 0,
          "crit_damage_reduction": 0,
          "hp": 0,
          "hp_regen": 0,
          "magic_defense": 0,
          "magic_lifesteal": 0,
          "magic_pen": 0,
          "magic_power": 0,
          "mana": 0,
          "mana_regen": 0,
          "movement_spd": 0,
          "physical_atk": 0,
          "physical_defense": 0,
          "physical_lifesteal": 0,
          "physical_pen": 0
        },
        "summary": ""
      },
      {
        "id": 1,
        "name": "",
        "cost": 0,
        "img": "",
        "attributes": {
          "attack_speed": 0,
          "cd_reduction": 0,
          "crit_chance": 0,
          "crit_damage_reduction": 0,
          "hp": 0,
          "hp_regen": 0,
          "magic_defense": 0,
          "magic_lifesteal": 0,
          "magic_pen": 0,
          "magic_power": 0,
          "mana": 0,
          "mana_regen": 0,
          "movement_spd": 0,
          "physical_atk": 0,
          "physical_defense": 0,
          "physical_lifesteal": 0,
          "physical_pen": 0
        },
        "summary": ""
      },
      {
        "id": 2,
        "name": "",
        "cost": 0,
        "img": "",
        "attributes": {
          "attack_speed": 0,
          "cd_reduction": 0,
          "crit_chance": 0,
          "crit_damage_reduction": 0,
          "hp": 0,
          "hp_regen": 0,
          "magic_defense": 0,
          "magic_lifesteal": 0,
          "magic_pen": 0,
          "magic_power": 0,
          "mana": 0,
          "mana_regen": 0,
          "movement_spd": 0,
          "physical_atk": 0,
          "physical_defense": 0,
          "physical_lifesteal": 0,
          "physical_pen": 0
        },
        "summary": ""
      },
      {
        "id": 3,
        "name": "",
        "cost": 0,
        "img": "",
        "attributes": {
          "attack_speed": 0,
          "cd_reduction": 0,
          "crit_chance": 0,
          "crit_damage_reduction": 0,
          "hp": 0,
          "hp_regen": 0,
          "magic_defense": 0,
          "magic_lifesteal": 0,
          "magic_pen": 0,
          "magic_power": 0,
          "mana": 0,
          "mana_regen": 0,
          "movement_spd": 0,
          "physical_atk": 0,
          "physical_defense": 0,
          "physical_lifesteal": 0,
          "physical_pen": 0
        },
        "summary": ""
      },
      {
        "id": 4,
        "name": "",
        "cost": 0,
        "img": "",
        "attributes": {
          "attack_speed": 0,
          "cd_reduction": 0,
          "crit_chance": 0,
          "crit_damage_reduction": 0,
          "hp": 0,
          "hp_regen": 0,
          "magic_defense": 0,
          "magic_lifesteal": 0,
          "magic_pen": 0,
          "magic_power": 0,
          "mana": 0,
          "mana_regen": 0,
          "movement_spd": 0,
          "physical_atk": 0,
          "physical_defense": 0,
          "physical_lifesteal": 0,
          "physical_pen": 0
        },
        "summary": ""
      },
      {
        "id": 5,
        "name": "",
        "cost": 0,
        "img": "",
        "attributes": {
          "attack_speed": 0,
          "cd_reduction": 0,
          "crit_chance": 0,
          "crit_damage_reduction": 0,
          "hp": 0,
          "hp_regen": 0,
          "magic_defense": 0,
          "magic_lifesteal": 0,
          "magic_pen": 0,
          "magic_power": 0,
          "mana": 0,
          "mana_regen": 0,
          "movement_spd": 0,
          "physical_atk": 0,
          "physical_defense": 0,
          "physical_lifesteal": 0,
          "physical_pen": 0
        },
        "summary": ""
      }
    ]
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
    if (this.atk_spd > 0 || this.cd_reduc > 0 || this.crit_chance > 0 ||
      this.crit_dmg_red > 0 || this.hp > 0 || this.hp_regen > 0 || this.magic_defence > 0
      || this.magic_lifesteal > 0 || this.magic_pen > 0 || this.magic_power > 0 ||
      this.mana > 0 || this.mana_regen > 0 || this.movement_spd > 0 || this.physical_atk > 0
      || this.physical_def > 0 || this.physical_life > 0 || this.physical_pen > 0) {
      this.attri = true
      console.log('yep')
    } else {
      this.attri = false
      console.log('nope')
    }


    this.dummy.forEach((te) => {
      if (te.summary != "") {
        this.passive.push(te.summary)
      }
    })
    console.log(this.dummy)
  }

  async presentAlertMultipleButtons() {
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
            this.presentAlertPrompt()
            console.log('Confirm Okay');
          }
        }
      ]
    });
    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'name-build',
      header: 'Name Your Build',
      inputs: [
        {
          name: 'savename',
          type: 'text',
          placeholder: 'e.g mybuild'
        },

      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Save',
          handler: data => {

            if (data.savename == "") {
              // if empty
              this.toastAdd()
            } 
            else {
 
              let dd = new Date()
              let mod = this.datepipie.transform(dd, 'dd/MM/yy HH:mm')
              this.savename = data.savename
       
              this.buildobj = {
                name: this.savename,
                dummy: this.dummy,
                passive: this.passive,
                ttCost: this.ttCost,
                date: mod
              }

              this.serBuild.checkDupli(this.buildobj).then(re => {
                // check for duplicate
                if (re == false) {
                  this.serBuild.addBuild(this.buildobj).then((ds) => {

                    this.navCtrl.pop() // go back after succes
                    // catch error
                  }).catch((er) => {
                    console.log(er)
                  })
                }
              })

            }
          }
        }
      ]
    });

    await alert.present();
  }
  async toastAdd() {
    const toast = await this.toastController.create({
      message: "Please enter a name of your build.",
      color: "secondary",
      duration: 2000
    });
    toast.present();
  }


}

