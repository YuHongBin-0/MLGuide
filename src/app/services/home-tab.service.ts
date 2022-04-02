import { Injectable, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';



export interface Slides {
  nav: string,
  thumbnail: string
}

@Injectable({
  providedIn: 'root'
})
export class HomeTabService implements OnInit {

  private slides: Observable<Slides[]>;

  slide = []
  ref = firebase.database().ref('slide/');

  constructor() { 
    this.ref.on('value', resp => {
      this.slide = []
      this.slide = snapshotToArray(resp)
      console.log(this.slide)
    })
    
  }

  ngOnInit() {

  }
}

export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
    let item = childSnapshot.val();
    item.key = childSnapshot.key;
    returnArr.push(item);
  });

  return returnArr.reverse();
};