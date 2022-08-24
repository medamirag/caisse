import { Famille } from "./famille";

export interface Product {
    codeProduct:string,
    productName:string,
    price:number,
    famille:Famille,
    size:string

}
