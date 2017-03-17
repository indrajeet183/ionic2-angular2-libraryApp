import { Component } from '@angular/core';
import {LibraryService} from '../../app/services/library.service';
import { NavController } from 'ionic-angular';
//import {LibraryPage} from '../library/library';
import {TabsPage} from '../tabs/tabs';

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginPage {
stringURL: string;
  constructor(public navCtrl: NavController,private libraryService: LibraryService) {

  }
  setUrl(){
    localStorage.setItem('stringURL', this.stringURL);
    console.log(this.stringURL);
    this.libraryService.setBaseUrl(this.stringURL);
    this.navCtrl.push(TabsPage);
  }
}
