import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private fb:FormBuilder ,private productService:ProductService) { }

  formsProducts?: FormGroup;
formvalide:boolean=false;
  ngOnInit(): void {

    this.formsProducts=this.fb.group({
      name:["",Validators.required],
      price:["",Validators.required],
      quantity:["",Validators.required],
      selected:["",Validators.required],
      available:["",Validators.required],
    })

  }


  addProduct() {

this.productService.addP(this.formsProducts?.value).subscribe({
  next:data=>{
    this.formvalide=true;
    this.formsProducts?.reset();
  },
  error:err => {

  }
})
  }
}
