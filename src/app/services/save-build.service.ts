import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { build$ } from 'protractor/built/element';
import { tokenName } from '@angular/compiler';
import { ToastController } from '@ionic/angular';

export interface Build {
  name: any,
  dummy: Array<any>,
  passive: Array<any>,
  ttCost: any,
  date: any

}
const STORAGE_KEY_BUILD = 'savebuild';

@Injectable({
  providedIn: 'root'
})
export class SaveBuildService {

  constructor(public storage: Storage,
    public toastController: ToastController
  ) { }


  checkDupli(obj) {
    return this.getBuilds().then(res => {
      let avail = false 
      console.log(res)
      if (res) {
        res.forEach(element => {
          if (element.name == obj.name) {
            avail = true
            console.log('DUPLICATE!')
            this.toastAdd()
          }
        });
      }
      return avail
    })
  }


  addBuild(buildObj) {
    return this.getBuilds().then((build: Build[]) => {
  
      if (build) {
        build.push(buildObj);
        this.success()
        return this.storage.set(STORAGE_KEY_BUILD, build);
      }
      else {
        this.success()
        return this.storage.set(STORAGE_KEY_BUILD, [buildObj])
      }
    })
  }

  deleteBuild(buildObj) {
    return this.getBuilds().then((build: Build[]) => {

      if (!build || build.length === 0) {
        console.log(buildObj.name);
        return null;
      }
      let toKeep: Build[] = []
      for (let i of build) {

        if (i.name !== buildObj.name) {

          console.log(i.name)
          toKeep.push(i)
        }
      }
      return this.storage.set(STORAGE_KEY_BUILD, toKeep)
    })
  }
  getBuilds() {
    return this.storage.get(STORAGE_KEY_BUILD);
  }


  updateBuild(build: Build) {
    return this.getBuilds().then((builds: Build[]) => {

      if (!builds || builds.length === 0) {
        return null;
      }

      let newBuild: Build[] = []

      for (let i of builds) {
        if (i.name === build.name) {
          newBuild.push(build)

        } else {
          newBuild.push(i)
        }
      }
      return this.storage.set(STORAGE_KEY_BUILD, newBuild)
    })

  }

  async toastAdd() {
    const toast = await this.toastController.create({
      message: "Build name cannot be duplicated.",
      color: "secondary",
      duration: 2000
    });
    toast.present();
  }

  async success() {
    const toast = await this.toastController.create({
      message: "Successfully saved!",
      color: "secondary",
      duration: 2000
    });
    toast.present();
  }
}
