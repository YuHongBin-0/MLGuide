import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInput, IonSearchbar } from '@ionic/angular';
import * as firebase from 'firebase'; import 'firebase/auth'; import 'firebase/firestore';


@Component({
  selector: 'app-search-hero',
  templateUrl: './search-hero.page.html',
  styleUrls: ['./search-hero.page.scss'],
})
export class SearchHeroPage implements OnInit {
  @ViewChild('autofocus', { static: false }) myInput: IonSearchbar;
  public heroList: Array<any>;
  public loadedheroList: Array<any>;
  public heroRef: firebase.database.Reference;
  emptysearch: string;

  constructor() {
    this.heroRef = firebase.database().ref('heroes');
    this.heroRef.on('value', resp => {
      let heroes = [];


      resp.forEach(course => {
        // console.log(course.val())
        let item = course.val();
        item.key = course.key;
        heroes.push(item);


      });
      this.heroList = heroes;
      this.loadedheroList = heroes.reverse();

    });
  }

  ngOnInit() {
    setTimeout(() => {
      this.myInput.setFocus();
    }, 500);

  }

  initializeItems() {
    this.heroList = this.loadedheroList;
  }


  getItems(searchbar) {
    // Reset items back to all of the items
    this.initializeItems();

    // set q to the value of the searchbar
    var q = searchbar.srcElement.value;


    // if the value is an empty string don't filter the items
    if (!q) {
      return;
    }

    this.heroList = this.heroList.filter((v) => {
      if (v.name && q) {
        if (v.name.toLowerCase().indexOf(q.toLowerCase()) > -1 || v.role.role_1.toLowerCase().indexOf(q.toLowerCase()) > -1 || v.speciality.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });

    console.log(q, this.heroList.length);

    if (this.heroList.length == 0) {
      this.emptysearch = "empty liao"  // equivalent to true or present
      console.log("true")
    } else {
      this.emptysearch = "" // equivalent to false or empty
      console.log("false")
    }
  }
}
