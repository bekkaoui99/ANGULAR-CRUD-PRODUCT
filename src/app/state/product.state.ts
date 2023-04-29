export enum ProductState{
  loeding,
  loeded,
  erreur
}
export interface formaProducts<T>{
  dataState:ProductState,
  data?:T,
  ereurState?:string
}


export enum eventFonction{
  SELECTED_ProductS="[products] selected products",
  AVAILABLE_ProductS="[products] available products",
  SEARSH_ProductS="[products] searsh products",
  ALL_ProductS="[products] all products",
  DELETE_ProductS="[products] delete products",
  UPDATE_ProductS="[products] update products",
  GET_ONE_ProductS="[products] get one products"

}





export interface eventState{
  type:eventFonction,
  parame?:any
}
