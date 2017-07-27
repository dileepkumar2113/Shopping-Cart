import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import {CommonModule} from "@angular/common";
import {ProductService} from "../services/product.service";
import {CartService} from "../services/cart.service";
import {FormsModule} from "@angular/forms"
import {DetailsComponent} from "./details.component";
@NgModule({
  imports: [
    CommonModule,FormsModule],
  declarations: [ProductListComponent, CartItemsComponent,DetailsComponent],
  exports:[ProductListComponent,CartItemsComponent],
  providers:[ProductService,CartService]
})
export class ShoppingModule { }
