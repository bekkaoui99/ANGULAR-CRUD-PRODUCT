import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ProductComponent} from "./components/product/product.component";
import {AddProductComponent} from "./components/add-product/add-product.component";
import {UpdateProductComponent} from "./components/update-product/update-product.component";

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"products",component:ProductComponent},
  {path:"addProduct",component:AddProductComponent},
  {path:"updateProduct/:id",component:UpdateProductComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
