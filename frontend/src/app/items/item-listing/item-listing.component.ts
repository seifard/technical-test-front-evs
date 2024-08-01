import { Component } from '@angular/core';
import { ItemsService } from '../../services/items.service';

export interface response {
  body: object;
}
@Component({
  selector: 'app-item-listing',
  templateUrl: './item-listing.component.html',
  styleUrls: ['./item-listing.component.scss']
})
export class ItemListingComponent {
  constructor(private items: ItemsService) { 
    this.getItems()
  }

  public itemsList:any =[] ;
  item ="";

  addItem(){
    const data ={
      "name": this.item
  }

    this.items.addItem("items",data).subscribe((response:any) =>{
      console.log(response.body)
      this.getItems()
      this.item ='';
    })
  }
  getItems(){
    this.items.getItemsList('items').subscribe(itemsListing =>{
     this.itemsList = itemsListing;
    })
  }
}
