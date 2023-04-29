import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../../model/product.model";
import {eventDriverService} from "../../../../service/even.driver.service";
import {eventFonction, formaProducts, ProductState} from "../../../../state/product.state";
import {Observable} from "rxjs";


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
@Input() productsItem?:Product;

  constructor(private eventDrivenS:eventDriverService) { }

  ngOnInit(): void {
  }

  deleteProduct(data:Product) {

    this.eventDrivenS.publishEvent({type:eventFonction.DELETE_ProductS, parame:data})
  }

  updateProduct(data:Product) {
    this.eventDrivenS.publishEvent({type:eventFonction.UPDATE_ProductS, parame:data})
  }

  getOneProducts(data:Product) {
    this.eventDrivenS.publishEvent({type:eventFonction.GET_ONE_ProductS, parame:data})
  }
}
