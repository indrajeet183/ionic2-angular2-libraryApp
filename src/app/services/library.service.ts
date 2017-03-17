import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class LibraryService {
  http:any;
  baseUrl: String;

  constructor(http:Http){
    this.http = http;
    //this.baseUrl = 'http://localhost:3000/';
  }
  setBaseUrl(urlString){
    console.log("sasa"+urlString);
      this.baseUrl = urlString;

  }
  getAll()  {
         // ...using get request
         return this.http.get(this.baseUrl+'all')
                        // ...and calling .json() on the response to return data
                         .map(res=> res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
     }
     getUser(userId)  {
            // ...using get request
            return this.http.get(this.baseUrl+'users/'+userId)
                           // ...and calling .json() on the response to return data
                            .map(res=> res.json())
                            //...errors if any
                            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
      }

      getPunches(userId)  {
             // ...using get request
             return this.http.get(this.baseUrl+'punches/'+userId)
                            // ...and calling .json() on the response to return data
                             .map(res=> res.json())
                             //...errors if any
                             .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
       }


}
