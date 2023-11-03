import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent {
   product ={
    name:"Samsung Galaxy S21 FE",
    Price:70000,
    GST:1300,
    inStock:10,
    maxProduct:10

  };

  quantity = 0;
  decreasequantity=()=>{
    if(this.quantity>0){
      this.quantity--;
      this.product.inStock++;
    }
  }
  increasequantity=()=>{
    if(this.quantity<this.product.maxProduct){
      this.quantity++;
      this.product.inStock--;
    }
  }
  changeproductname=()=>{
    this.product.name="Motorola edge 30";
  }
  changeproductname2=()=>{
    this.product.name="Samsung Galaxy S21 FE"
  }

  applyStyles(){
    let styles={
      color:'white',
      'background-color':'green'
    }
    return styles
  }
  reviewList=[
    {
      name:"Aditya", review:"excellent product"
    },
    {
      name:"Rohan", review:"Nice product"
    }
  ]
}
