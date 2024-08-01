import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListingComponent } from './item-listing/item-listing.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [
    ItemListingComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forRoot({})
  ],
  exports:[
    ItemListingComponent,
  ]

})
export class ItemsModule { }
