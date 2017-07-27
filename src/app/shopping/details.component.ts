import {Component} from "@angular/core";
import {ActivatedRoute,Router} from "@angular/router"
import {ProductService} from "../services/product.service";
import {Product} from "../models/product.model";

@Component({
  template:`
    <h3>Product Details View
      <br>ID :{{product.id}}
      <br>Name :{{product.name}}
      <br>Price :{{product.price}}
      <br>Description :{{product.description}}
    </h3>
    <button class="btn btn-primary" (click)="goBack()">Back</button>
  `
})
export class DetailsComponent{

  product :Product = new Product("","",null,"");

  constructor(private ar:ActivatedRoute, private productService:ProductService,
              private router:Router)
  {
    let paramId = ar.snapshot.params["id"];
    this.productService.getSPecificProductData(paramId).subscribe(
      data=>{
            this.product = data.json();
      }, error => {
            console.log(error)
      }
    );
  }

  goBack()
  {
    this.router.navigate(['/list'],{ skipLocationChange: true })
  }
}
