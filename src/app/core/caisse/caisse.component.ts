import { Component, OnInit } from '@angular/core';
import { Commande } from 'src/app/models/commande';
import { Famille } from 'src/app/models/famille';
import { Lignecommande } from 'src/app/models/lignecommande';
import { Product } from 'src/app/models/product';
import { CommandeService } from 'src/app/services/commande.service';
import { FamilleService } from 'src/app/services/famille.service';
import { LignecommandeService } from 'src/app/services/lignecommande.service';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-caisse',
  templateUrl: './caisse.component.html',
  styleUrls: ['./caisse.component.scss']
})
export class CaisseComponent implements OnInit {
commande:Commande={caissier:{isAdmin:false,password:"",username:""},
client:{codeClient:"",nameClient:""},
date:new Date(),
montantTTC:0,
numCmd:"",
status:false
}
ligneCmd:Lignecommande[]=[];
familleList:Famille[]=[];
productList:Product[]=[];

  constructor(private commandeService:CommandeService,private ligneCommandeService:LignecommandeService,private productService:ProduitService,private familleService:FamilleService) 
  {

   }

  ngOnInit(): void {
    this.familleList=this.familleService.getAll();//ToDo: Create getAll function in familleService
  }
createCommande(){
  this.commandeService.create()// ToDo : Create create function in commandeService
}

addLigneCommandeByCommande(idCommande:number){
  this.ligneCommandeService.addByCommande(idCommande)// ToDo : Create addByCommande in lignecommandeService and update commande(TTC)
}
removeLigneCommande(idLigneCommande:Number){
  this.ligneCommandeService.remove(idLigneCommande)//ToDo : Create remove in ligneCommandeService and update commande(TTC)
}
addCommand(commande:Commande){
  this.commandeService.add(commande) // ToDo : Create add in commandeService 
}
getLigneCommandeByIDCommande(idCommande:number)
{
 this.ligneCommandeService.getAllByIDCommande(idCommande) // ToDo : Create getAllByIDCommande function in ligneCommandeService 
}
}
