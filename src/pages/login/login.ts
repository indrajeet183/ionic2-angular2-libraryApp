import { Component } from '@angular/core';
import {LibraryService} from '../../app/services/library.service';
import { NavController } from 'ionic-angular';
//import {LibraryPage} from '../library/library';
import {TabsPage} from '../tabs/tabs';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'login',
  templateUrl: 'login.html',

})
export class LoginPage {
stringURL: string;
  constructor(public navCtrl: NavController,private libraryService: LibraryService, public http: Http) {
  }
  setUrl(){
      localStorage.setItem('stringURL', this.stringURL);
      //console.log(this.stringURL);
this.http.get(this.stringURL).map((res) => {
                if (res) {
                    if (res.status === 201) {
                      this.libraryService.setBaseUrl(this.stringURL),
                      this.navCtrl.push(TabsPage);
                    }
                    else if (res.status === 200) {
                      this.libraryService.setBaseUrl(this.stringURL),
                      this.navCtrl.push(TabsPage);
                    }
                }
            }) .catch(this.handleError).subscribe();
}
private handleError (error: Response | any) {
  // In a real world app, you might use a remote logging infrastructure
  let errMsg: string;
  if (error instanceof Response) {
    const body = error.json() || '';
    const err = body.error || JSON.stringify(body);
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  } else {
    errMsg = error.message ? error.message : error.toString();
  }
  console.error("ASDASDASDASDASD"+errMsg);
  errMsg+="ASDASDASDASD";
  return Observable.throw(errMsg);
}
}
