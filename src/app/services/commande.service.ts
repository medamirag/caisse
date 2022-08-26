import { Injectable } from '@angular/core';
import { Client } from '../models/client';
import { Commande } from '../models/commande';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  Commandes!:Commande[]
  caissier:User={isAdmin:false,password:'',username:''}
  client:Client={codeClient:'',nameClient:''}
  commande:Commande={
    caissier:this.caissier,
    client:this.client,
    date:new Date(),
    montantTTC:0,
    numCmd:"1",
    status:false
  }
  getCommandeActuelle(){
    return this.commande
  }

  

  constructor() { 
    this.Commandes=[this.commande]
  }
  create():string {
    this.Commandes.push( {caissier:this.caissier,client:this.client,date:new Date("December 17, 1995"),montantTTC:0,numCmd:'4',status:false});
  return this.Commandes[this.Commandes.length-1].numCmd

  }
  update(commande: Commande) {
    return this.update;
  }
  getCmdBynumCmd(numCmd:any):Commande|any{
    console.log("numCmd: "+numCmd);
    console.log("Commandes: "+this.Commandes);
    
    return this.Commandes.find(cmd=>cmd.numCmd===numCmd)
  }
}
