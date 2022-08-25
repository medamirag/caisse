import { Component, OnInit } from '@angular/core';
import { Commande } from 'src/app/models/commande';
import { Famille } from 'src/app/models/famille';
import { Lignecommande } from 'src/app/models/lignecommande';
import { Product } from 'src/app/models/product';
import { ClientService } from 'src/app/services/client.service';
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
step:number=0;
selctedFam = localStorage.getItem('selectFam');
  constructor(private clientService:ClientService, private commandeService:CommandeService,private ligneCommandeService:LignecommandeService,private productService:ProduitService,private familleService:FamilleService) 
  {

   }

  ngOnInit(): void {
    //creation commande 
    this.familleList=this.familleService.getAll();//ToDo: Create getAll function in familleService
    this.isChange()
    
    localStorage.setItem('selectFam','')


    
    
  }
  ngOnChanges():void{
    console.log('selected famille =',this.selctedFam);
    

  }
  isChange(){
    //
    console.log('selectedfam =',this.selctedFam);
    console.log('localStorage',localStorage.getItem('selectFam'));
    
    if(this.selctedFam === localStorage.getItem('selectFam')){ 
      console.log('sans click');
      localStorage.setItem('selectFam','')
      

    }else{
      this.setStep();
      console.log('change');
      this.selctedFam = localStorage.getItem('selectFam');
     
      this.selctedFam=''
    }
  }
  setStep()
  {
    if(this.step===0){
      this.step=1
      
    }
    else{
      this.step=0
    }
  }
  getClientByCodeClient(codeClient:string){
   return this.clientService.getClientByCodeClient(codeClient) // ToDo : create getClientByCodeClient function in clientService that return client model

  }
createCommande(){
  this.commandeService.create()// ToDo : Create create function in commandeService
}
getProductByFamille(famille:Famille){
  this.productService.getAllProductByFamille(famille)// Bilel :ToDo : Create function getAllByFamille in productService
}
addLigneCommandeByCommande(commande:Commande){
  // this.ligneCommandeService.addByCommande(commande)// bilel : ToDo : Create addByCommande in lignecommandeService and update commande(TTC)
}
removeLigneCommande(idLigneCommande:Number){
  this.ligneCommandeService.remove(idLigneCommande)//ToDo : Create remove in ligneCommandeService and update commande(TTC)
this.ligneCmd=this.ligneCommandeService.getAllByIDCommande(this.commande)
}
//**
/* 
* update is executed in popup onclick(button)
 * @param commande 
 * @param codeClient 
 */
updateCommand(commande:Commande,codeClient:string){
  commande.client = this.getClientByCodeClient(codeClient)
  this.commandeService.update(commande) // ToDo : Create add in commandeService  
}
getLigneCommandeByIDCommande(commande:Commande)
{
 this.ligneCommandeService.getAllByIDCommande(commande) // ToDo : Create getAllByIDCommande function in ligneCommandeService 
}

}
