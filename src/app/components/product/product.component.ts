import { Component, OnInit } from '@angular/core';
import {eventFonction, eventState, formaProducts, ProductState} from "../../state/product.state";
import {ProductService} from "../../service/product.service";
import {Product} from "../../model/product.model";
import {eventDriverService} from "../../service/even.driver.service";
import {Router} from "@angular/router";
import {catchError, map, Observable, of, startWith} from "rxjs";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
productRoot?:Observable<formaProducts<Product[]>>;
productFilter?:Product[];
erreurM?:string;
  constructor(private productService:ProductService
              , private eventDriverService:eventDriverService
              ,private router:Router

  ) { }

  ngOnInit(): void {

   this.eventDriverService.sourceEvenSubject.subscribe((eventStete:eventState)=>{

    this.eventCaseFunction(eventStete);
   })

  }



eventCaseFunction($event:eventState){
    switch ($event.type){
      case eventFonction.ALL_ProductS:this.allProducts();break;
      case eventFonction.AVAILABLE_ProductS:this.availableProduct();break;
      case eventFonction.SELECTED_ProductS:this.selectedProduct();break;
      case eventFonction.SEARSH_ProductS:this.cherchProduct($event.parame);break;
      case eventFonction.DELETE_ProductS:this.deleteProduct($event.parame);break;
      case eventFonction.GET_ONE_ProductS:this.selectOneProduct($event.parame);break;
      case eventFonction.UPDATE_ProductS:this.updateProduct($event.parame);break;
    }
}

updateProduct(data:Product){
    this.router.navigateByUrl("updateProduct/"+data.id);
}


allProducts(){
   this.productRoot= this.productService.allP().pipe(
      map((data)=>({dataState:ProductState.loeded,data:data})),
     startWith({dataState:ProductState.loeding}),
      catchError(err => of({dataState:ProductState.erreur,ereurState:err.message}))

    )
}


selectedProduct(){

   this.productRoot= this.productService.selectedP().pipe(
      map((data)=>({dataState:ProductState.loeded,data:data})),
     startWith({dataState:ProductState.loeding}),
      catchError(err => of({dataState:ProductState.erreur,ereurState:err.message}))

    )

}


  availableProduct(){

    this.productRoot= this.productService.availableP().pipe(
      map((data)=>({dataState:ProductState.loeded,data:data})),
     startWith({dataState:ProductState.loeding}),
      catchError(err => of({dataState:ProductState.erreur,ereurState:err.message}))

    )

  }


  cherchProduct(keyword:any){

  this.productRoot= this.productService.searshP(keyword).pipe(
      map((data)=>({dataState:ProductState.loeded,data:data})),
     startWith({dataState:ProductState.loeding}),
      catchError(err => of({dataState:ProductState.erreur,ereurState:err.message}))

    )

  }



  deleteProduct(data:Product){

    this.productService.deleteP(data).subscribe({
      next:data=>{
     this.allProducts();
      },
      error:err=>{
        this.erreurM=err.message();
        console.log(this.erreurM);

      }
    })

  }



  selectOneProduct(data:Product){

    this.productService.selectOneP(data).subscribe({
     next:dataP=>{
data.selected=dataP.selected;
console.log(data);
     },
     error:err=>{
       console.log(err.message);
     }
   })

  }



}
