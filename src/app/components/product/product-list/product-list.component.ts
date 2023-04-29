import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../model/product.model";
import {Observable} from "rxjs";
import {formaProducts, ProductState} from "../../../state/product.state";



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
@Input() productsList?:Observable<formaProducts<Product[]>>;
  datastateProducts= ProductState;
  constructor() { }

  ngOnInit(): void {
  }

}
