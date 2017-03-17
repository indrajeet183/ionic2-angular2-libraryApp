import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LibraryService} from '../../app/services/library.service';
import {DetailsPage} from '../details/details'
@Component({
  selector: 'library',
  templateUrl: 'library.html',
})
export class LibraryPage {
items: Object;
catagory: any;
limit:any;
  constructor(public navCtrl: NavController, private libraryervice: LibraryService) {

  }

  ngOnInit(){
    this.getPosts();
  }


getPosts(){
  this.libraryervice.getAll().subscribe(
    response => {
      this.items=response;
    console.log(response);
    }

  )

}
viewItem(item){
  console.log(item);
  this.navCtrl.push(DetailsPage,{
    item:item
  });
}

}
