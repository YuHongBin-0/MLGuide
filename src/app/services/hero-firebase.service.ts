import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'
@Injectable({
  providedIn: 'root'
})
export class HeroFirebaseService {

  info: any[] = [];
  crucial: any[] = [];
  firstemblem: any[] = [];
  secondemblem: any[] = [];
  priorityskills: any[] = [];
  battlespell: any[] = [];
  array_skills = [];
  favHeroDetails: {};

  strong_against: any[] = [];
  weak_against: any[] = [];
  counter_equipment: any[] = [];
  name: string;
  trustedVideoUrl: SafeResourceUrl;
  constructor(private dom: DomSanitizer,) {

  }
  fetchData(key) {
    this.info = []
    this.crucial = [];
    this.firstemblem = [];
    this.secondemblem = [];
    this.battlespell = [];
    this.priorityskills = [];
    this.strong_against = [];
    this.weak_against = [];
    this.array_skills = [];
    this.counter_equipment = [];
    this.favHeroDetails = {}

    console.log(key + " " + "service")

    firebase.database().ref('heroes/' + key).on('value', resp => {
      this.info = snapshotToObject(resp);
      let item = resp.val();

      let obj =[]
      item.skill.array_skills.forEach(element => {
        element.video = this.dom.bypassSecurityTrustResourceUrl(element.video);
        obj.push(element)
      });


      this.name = item.name

      this.favHeroDetails = {
        id: key,
        name: item.name,
        image: item.fav_poster,
        role: item.role.role_1,
        speciality: item.speciality,
        bp: item.cost.bp,
        diamond: item.cost.diamond,
        ticket: item.cost.ticket
      }

      this.crucial = item.crucial_item  // more efficient 

      this.firstemblem = item.firstemblem.image

      this.secondemblem = item.fsecondemblem.image

      this.priorityskills = item.priority_skill
    
      this.battlespell = item.battle_spell

      this.strong_against = item.strong_against

      this.array_skills = obj;

      this.weak_against = item.weak_against

      this.counter_equipment = item.counter_equipment
    }
    );
  }
}
export const snapshotToObject = snapshot => { // for specific hero
  let item = snapshot.val();
  item.key = snapshot.key;
  return item;

}

