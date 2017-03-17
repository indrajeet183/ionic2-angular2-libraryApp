import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LibraryService} from '../../app/services/library.service';
//import {LibraryPage} from '../library/library';
@Component({
  selector: 'settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
catagory: any;
limit:any;
stringURL: string;
  constructor(public navCtrl: NavController, private libraryService: LibraryService) {

  }

  /*setUrl(){
    localStorage.setItem('stringURL', this.stringURL);
    console.log(this.stringURL);
    this.libraryService.setBaseUrl(this.stringURL);
    this.navCtrl.push(LibraryPage);

  }
  getDefaults(){
    if(localStorage.getItem('catagory')!= null){
      this.catagory=localStorage.getItem('catagory');
    }else{
      this.catagory = 'sports';
    }
    if(localStorage.getItem('limit')!= null){
        this.limit=localStorage.getItem('limit');
      }else{
      this.limit = 10;
    }
  }*/

/*setDefaults(){
  localStorage.setItem('catagory', this.catagory);
  localStorage.setItem('limit', this.limit);
  this.navCtrl.push(LibraryPage)
}*/

}
