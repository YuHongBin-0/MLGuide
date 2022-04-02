import { Component, OnInit } from '@angular/core';
import { SaveBuildService, Build } from 'src/app/services/save-build.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-saved-build',
  templateUrl: './saved-build.page.html',
  styleUrls: ['./saved-build.page.scss'],
})
export class SavedBuildPage implements OnInit {

  avail = true
  saveBuild: Build[] = [];

  constructor(
    private serBuild: SaveBuildService,
    private router: Router
  ) { }

  ngOnInit() {
    this.serBuild.getBuilds().then((list) => {
      let obj = [];
      if (list) {
       

        list.forEach(element => {
          obj.push(element)
        });
        this.saveBuild = obj.reverse()
      } 
      if (this.saveBuild.length == 0) {
        console.log('no')
        this.avail = false
      } else {
        console.log('yes')
        this.avail = true
      }
  
    })
   
  }


  openDetailsWithState(key) {
    let navigationExtras: NavigationExtras = {
      state: key
    };
    this.router.navigate(['saved-details'], navigationExtras);
  }

  delete(obj) {

    this.serBuild.deleteBuild(obj).then((s) => {
      console.log('success')
      this.ngOnInit()
    }).catch((er) => {
      console.log(er)
    })
  }

  ionViewWillEnter() {
    console.log('hello')
    this.ngOnInit()
  }

}
