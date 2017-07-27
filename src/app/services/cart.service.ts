import {CartItem} from "../models/cartItems.model";
import {Injectable} from "@angular/core"

@Injectable()
export class CartService{

  private cartItemsData: CartItem[] = [];

  addItem(cartItem:CartItem)
  {
    this.cartItemsData.push(cartItem);
  }

  deleteItem(index:number)
  {
    this.cartItemsData.splice(index,1);
  }

  getCartData()
  {
    return this.cartItemsData;
  }

  getSpecificCartProductData (productId:string)
  {
     return this.cartItemsData.filter(element => {
      return element.productId == productId;
    });
  }
}
