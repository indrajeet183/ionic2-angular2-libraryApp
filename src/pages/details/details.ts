import { Component } from '@angular/core';
import {LibraryService} from '../../app/services/library.service';
import { NavController ,NavParams} from 'ionic-angular';

@Component({
  templateUrl: 'details.html'
})
export class DetailsPage {
  item: any;
  user: JSON;
  constructor(public navCtrl: NavController,public params:NavParams,private libraryService: LibraryService) {
      this.item = params.get('item');
      this.getUser(this.item['fir_id'])
  }
  ngOnInit(){
    this.getUser(this.item['fir_id']);
  }
getUser(item){
  this.libraryService.getUser(item).subscribe(
    response => {
      this.user = response;
      console.log(this.user);
    }

  )
}
}
