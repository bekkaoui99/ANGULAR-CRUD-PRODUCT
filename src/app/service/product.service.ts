import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Product} from "../model/product.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn:"root"
})
export class ProductService{
host:String=environment.host;
  constructor(private http:HttpClient) {
  }


  selectedP():Observable<Product[]>{

    return this.http.get<Product[]>(this.host+"/products?selected=true");

  }


  selectOneP(data:Product):Observable<Product>{
data.selected=!data.selected;
    return this.http.put<Product>(this.host+"/products/"+data.id,data);

  }

  selectPToU(id:number):Observable<Product>{

    return this.http.get<Product>(this.host+"/products/"+id);

  }


  allP():Observable<Product[]>{

    return this.http.get<Product[]>(this.host+"/products");

  }


  availableP():Observable<Product[]>{

    return this.http.get<Product[]>(this.host+"/products?available=true");

  }


  searshP(keyWord:string):Observable<Product[]>{

    return this.http.get<Product[]>(this.host+"/products?name_like="+keyWord);

  }


  deleteP(data:Product):Observable<Product>{

    return this.http.delete<Product>(this.host+"/products/"+data.id);

  }


  updateP(data:Product){

    return this.http.put<void>(this.host+"/products/"+data.id,data);

  }

  addP(data:Product){

    return this.http.post<Product>(this.host+"/products",data);

  }

}
