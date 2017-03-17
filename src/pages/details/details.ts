import { Component } from '@angular/core';
import {LibraryService} from '../../app/services/library.service';
import { NavController ,NavParams} from 'ionic-angular';

@Component({
  templateUrl: 'details.html'
})
export class DetailsPage {
  item: any;
  user: JSON;
  punches: JSON;
  firID:any;
  constructor(public navCtrl: NavController,public params:NavParams,private libraryService: LibraryService) {
      this.item = params.get('item');
      this.getUser(this.item['fir_id']);
      this.firID=this.item['fir_id'];
      this.getPunches(this.firID);
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

  );
}

getPunches(firId){
  this.libraryService.getPunches(firId).subscribe(
    response => {
      this.punches = response;
      console.log(this.punches);
    }
  );
}
}
