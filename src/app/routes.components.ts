import {Component} from "@angular/core";
import {ProductService} from "./services/product.service";
import {Product} from "./models/product.model";

@Component({
  template:`<h3>Welcome To Shopping Cart</h3>`
})
export class HomeComponent{

}

@Component({
  template:`<div class="col-sm-6">
            <product-list></product-list>
          </div>
          <div class="col-sm-6 well">
            <cart-items></cart-items>
          </div>`
})
export class ListComponent{

}

@Component({
  templateUrl:'./manage.component.html'
})
export class ManageProductComponent{

  productList:Product[] = [];
  formProduct : Product = new Product("","",null,"");

  constructor(private productService:ProductService)
  {
    productService.getProductData().subscribe(data=>{
      this.productList = data.json();
    },error =>{
      console.log(error.toLocaleString());
    });
  }
  addProduct(newProduct:Product)
  {
    this.productService.addProduct(newProduct).subscribe(data=>{
      if(newProduct.id=='')
      {
        this.productList.push(data.json());
      }
      else
      {
        let updatedIndex:number = this.productList.findIndex(x => x.id === newProduct.id);
        this.productList[updatedIndex]=data.json();
      }
      this.formProduct = new Product("","",null,"");
    },error =>{
      console.log(error.toLocaleString());
    });
  }

  removeProduct(productId:string,index:number)
  {
    this.productService.deleteProduct(productId).subscribe(data=>{
      this.productList.splice(index,1);
      this.formProduct = new Product("","",null,"");
    },error =>{
      console.log(error.toLocaleString());
    });
  }

  edit(product:Product)
  {
    Object.assign(this.formProduct,product);
  }
}

@Component({
  template:`<h1>404 Error</h1>`
})
export class NotFoundComponent{

}
