import { Injectable } from '@angular/core';
import { Famille } from '../models/famille';
import { Product } from '../models/product';
import { FamilleService } from './famille.service';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
 listeProduit!:Product[]
 
  
  constructor() {this.listeProduit=[
    {codeProduct:'123',productName:'massage1',price:1000, famille:{id:1547,name:'massage',couleur:'00FF00'},size:'123'},
    {codeProduct:'456',productName:'massage4',price:4000, famille:{id:1547,name:'massage',couleur:'00FF00'},size:'123'},
    {codeProduct:'789',productName:'massage7',price:7000, famille:{  id:1568,name:'coiffure',couleur:'0000FF'},size:'123',photo:'https://m.fourseasons.com/alt/img-opt/~70.880.0,0000-75,7500-3000,0000-1687,5000/publish/content/dam/fourseasons/images/web/TSH/TSH_064_original.jpg'},
 
  
  
  ] }
  
 getAllProductService(){
  return this.listeProduit;
 } 
 
  getAllProductByFamille(famille:Famille) { // correction name function : caisse.component.ts ligne 45
return this.listeProduit.filter(prod=>prod.famille===famille);
  
}
  getAllProductByIDFamille(idFamille:number) { 
return this.listeProduit.filter(prod=>prod.famille.id===idFamille);
  
}
addProductService(produit : Product){
  return this.listeProduit.push(produit);
}
getProductByCodeProductService(code:string){
  return this.listeProduit.find(m=>m.codeProduct===code);

}



}

 
