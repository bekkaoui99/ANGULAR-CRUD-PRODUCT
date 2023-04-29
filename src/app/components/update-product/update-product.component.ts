import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
formUpdate?:FormGroup;
idPoduct:number;
updatedata:boolean=false;
  constructor(private fb:FormBuilder , private actaviteR:ActivatedRoute , private pService:ProductService) {

    this.idPoduct=this.actaviteR.snapshot.params['id'];
  }


  ngOnInit(): void {
    this.pService.selectPToU(this.idPoduct).subscribe({
      next: data => {

        this.formUpdate=this.fb.group({
          id:[data.id,Validators.required],
          name:[data.name,Validators.required],
          price:[data.price,Validators.required],
          quantity:[data.quantity,Validators.required],
          selected:[data.selected,Validators.required],
          available:[data.available,Validators.required]
        })





  }


    })


      }


  updateDataP() {
    this.pService.updateP(this.formUpdate?.value).subscribe({

      next:data=>{
this.updatedata=true;
      },
      error:err => {

      }
    })
  }
}
