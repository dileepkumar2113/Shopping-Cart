import {Product} from "../models/product.model";
import {Injectable} from "@angular/core";
import {Headers,Http,RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ProductService{
  private productData : Product[] = [];
  restUrl : string = 'http://localhost:2403/wsproducts';
  myHeader = new Headers({'Content-type':'application/json'});
  requestOption = new RequestOptions({headers:this.myHeader});

  constructor(private http:Http)
  {

  }
  getProductData()
  {
    return this.http.get(this.restUrl);
  }

  addProduct(newProduct:Product)
  {
    return this.http.post(this.restUrl,newProduct,this.requestOption);
  }

  deleteProduct(productId:string)
  {
    return this.http.delete(this.restUrl+"/"+productId,this.requestOption)
  }
}
