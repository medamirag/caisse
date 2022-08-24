import { Injectable } from '@angular/core';
import { Commande } from '../models/commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  Commandes!:Commande[]


  

  constructor() { }
  create() {
    this.Commandes.push( {caissier:{isAdmin:false,password:'',username:''},client:{codeClient:'',nameClient:''},date:new Date("December 17, 1995"),montantTTC:0,numCmd:'1',status:false});
  }
  update(commande: Commande) {
    return this.update;
  }
}
