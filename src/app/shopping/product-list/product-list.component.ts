import { Component, OnInit } from '@angular/core';
import {Product} from "../../models/product.model";
import {ProductService} from "../../services/product.service";
import {CartItem} from "../../models/cartItems.model";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {

  products:Product[]=[];

  constructor(private productService:ProductService,private cartService:CartService) {

    productService.getProductData().subscribe(data=>{
      this.products = data.json();
    },error =>{
      console.log(error.toLocaleString());
    });

  }

  ngOnInit() {
  }

  addCartData(product:Product)
  {
    let cr:CartItem ;
    let cartItemList:CartItem[]=[];
    cartItemList = this.cartService.getSpecificCartProductData(product.id);
    if(cartItemList.length==0)
    {
      cr = new CartItem(product.name,product.price,1,product.id);
      this.cartService.addItem(cr);
    }else
    {
      cr = cartItemList[0];
      cr.quantity+=1;
    }
  }
}
