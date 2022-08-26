import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Commande } from '../models/commande';
import { LigneCommande } from '../models/lignecommande';
import { Product } from '../models/product';
import { CommandeService } from './commande.service';

@Injectable({
  providedIn: 'root'
})
export class LignecommandeService {
  commande!:Commande
  getAllByNumCmdCommande(numCmd:any) {
    return this.listelignecommande.filter(lignecmd=>lignecmd.commande.numCmd==numCmd)
  }
  remove(idLigneCommande: Number) {
   let listelignecmdtemporaire:LigneCommande[]=[]

   for (let i = 0; i < this.listelignecommande.length; i++) {
    if(idLigneCommande!=i){
      listelignecmdtemporaire.push(this.listelignecommande[i])
    }
    this.listelignecommande=listelignecmdtemporaire
   }
  }
  listelignecommande!:LigneCommande[]
caisse1={isAdmin:false,password:'',username:''} 
caisse2={isAdmin:false,password:'',username:''}
caisse3={isAdmin:false,password:'',username:''}

client1={codeClient:'',nameClient:''}
client2={codeClient:'',nameClient:''}
client3={codeClient:'',nameClient:''}

product1={codeProduct:'123',productName:'massage1',price:1000, famille:{id:1547,name:'massage',couleur:'00FF00'},size:'123'}
product2={codeProduct:'123',productName:'massage1',price:1000, famille:{id:1547,name:'massage',couleur:'00FF00'},size:'123'}
product3={codeProduct:'123',productName:'massage1',price:1000, famille:{id:1547,name:'massage',couleur:'00FF00'},size:'123'}
 

constructor(private cmdService:CommandeService) { this.listelignecommande=[
    {commande:{caissier:this.caisse1,client:this.client1,date:new Date("December 17, 1995"),montantTTC:0,numCmd:'1',status:false},price:1000,product: this.product1,qte:1,unit:'forf'},
    {commande:{caissier:this.caisse2,client:this.client2,date:new Date("December 17, 1995"),montantTTC:0,numCmd:'1',status:false},price:1000,product: this.product2,qte:1,unit:'forf'},
    {commande:{caissier:this.caisse3,client:this.client3,date:new Date("December 17, 1995"),montantTTC:0,numCmd:'1',status:false},price:1000,product: this.product3,qte:1,unit:'forf'},
   
  
  ]
this.commande=this.cmdService.getCommandeActuelle()

}

  addByCommande(produit:Product){
    const numCmd=localStorage.getItem('cmd')
    let commande:Commande=this.cmdService.getCmdBynumCmd(numCmd)
let Lcmd=this.listelignecommande.find(cmd=>cmd.product===produit)
if(Lcmd===undefined){
  this.listelignecommande.push(
    {commande:commande,price:produit.price,qte:1,product:produit,unit:"pcs"}
  )
}
   else{
    Lcmd.qte++
    Lcmd.price=Lcmd.product.price*Lcmd.qte
   }

}
}