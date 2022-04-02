import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Hero {
  id: String,
  name: String,
  image: String,
  role: String,
  speciality: String,
  bp: String,
  diamond: String,
  ticket: String
}


const STORAGE_KEY = 'favoriteHeroes';

@Injectable({
  providedIn: 'root'
})
export class FavStorageService {

  constructor(public storage: Storage) { }

  isFavorite(heroKey) {
    return this.getAllFavoriteFilms().then(result => {
      let avail = false
      if (result) {
        result.forEach(element => {
          console.log(element.id + " " + heroKey)
          if (element.id == heroKey) {
            avail = true
          }
        });
      }
      return avail;
    });
  }

  favoriteHero(heroKey) {
    return this.getAllFavoriteFilms().then((hero: Hero[]) => {
      if (hero) {
        hero.push(heroKey);
        return this.storage.set(STORAGE_KEY, hero);
      } else {
        return this.storage.set(STORAGE_KEY, [heroKey]);
      }
    });
  }

  unfavoriteHero(heroKey) {
    return this.getAllFavoriteFilms().then((hero: Hero[]) => {
      if (!hero || hero.length === 0) {
        return null;
      }
      let toKeep: Hero[] = []
      for (let i of hero) {
        if (i.id !== heroKey) {
          console.log(i)
          toKeep.push(i)
        }
      }
      return this.storage.set(STORAGE_KEY, toKeep)
    });
  }

  getAllFavoriteFilms() {

    return this.storage.get(STORAGE_KEY);
  }
}
