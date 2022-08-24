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
    {codeProduct:'789',productName:'massage7',price:7000, famille:{  id:1568,name:'coiffure',couleur:'0000FF'},size:'123'},
 
  
  
  ] }
  
  
 
  getAllByFamille(famille:Famille) {
return this.listeProduit.find(prod=>prod.famille==famille)
  
}}

 
