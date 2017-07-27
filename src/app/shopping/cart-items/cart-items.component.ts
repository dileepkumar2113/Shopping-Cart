import { Component, OnInit } from '@angular/core';
import {CartItem} from "../../models/cartItems.model";
import {CartService} from "../../services/cart.service";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'cart-items',
  templateUrl: './cart-items.component.html'
})
export class CartItemsComponent implements OnInit {

  cartItems: CartItem[] = [];

  constructor(private cartService:CartService) {
    this.cartItems = cartService.getCartData();
  }

  removeCartItem(index:number)
  {
    this.cartService.deleteItem(index);
  }
  ngOnInit() {
  }
  totalAmount():number
  {
    let totAmnt:number = 0;
    for(let c of this.cartItems)
    {
      totAmnt = totAmnt+(c.price * c.quantity);
    }
    return totAmnt;
  }
}
