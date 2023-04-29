import {Component, OnInit} from '@angular/core';
import {eventDriverService} from "../../../service/even.driver.service";
import {eventFonction} from "../../../state/product.state";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-nav-bar',
  templateUrl: './product-nav-bar.component.html',
  styleUrls: ['./product-nav-bar.component.css']
})
export class ProductNavBarComponent implements OnInit {

  constructor( private  eventDrivenS:eventDriverService,private router:Router) { }

  ngOnInit(): void {
  }

  cherch(value: any) {
this.eventDrivenS.publishEvent({type:eventFonction.SEARSH_ProductS,parame:value.keyword});
  }

  getSelectedP() {
    this.eventDrivenS.publishEvent({type:eventFonction.SELECTED_ProductS});
  }

  getAllP() {
    this.eventDrivenS.publishEvent({type:eventFonction.ALL_ProductS});
  }

  getAvailableP() {
    this.eventDrivenS.publishEvent({type:eventFonction.AVAILABLE_ProductS});
  }

  addNewProduct() {
    this.router.navigateByUrl("/addProduct");
  }
}
