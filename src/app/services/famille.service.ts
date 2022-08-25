import { getLocaleCurrencyCode } from '@angular/common';
import { Injectable } from '@angular/core';
import { Famille } from '../models/famille';

@Injectable({
  providedIn: 'root'
})
export class FamilleService {
  familleList!:Famille[]

  constructor() {
    this.familleList=[
      {id:1547,name:'massage',couleur:'00FF00'},
      {  id:1568,name:'coiffure',couleur:'0000FF'},
      {id:2227,name:'spa',couleur:'FF0000'}
    ]
   }
   
  getAll():Famille[]{
   return this.familleList;

  }
  addFamilleService(famille:Famille){
   return this.familleList.push(famille);
  }
  getFamilleByIDService(idfamille:number){
    return this.familleList.find(m=>m.id===idfamille)
  }
}
