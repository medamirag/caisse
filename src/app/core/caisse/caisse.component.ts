import { Component, OnInit } from '@angular/core';
import { Commande } from 'src/app/models/commande';
import { Famille } from 'src/app/models/famille';
import { LigneCommande } from 'src/app/models/lignecommande';
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
ligneCmd:LigneCommande[]=[];
familleList:Famille[]=[];
productList:Product[]=[];
step:number=0;
selctedFam = localStorage.getItem('selectFam');
cmd = localStorage.getItem('cmd');
mntTTC = localStorage.getItem('mntTTC');

  constructor(private clientService:ClientService, private commandeService:CommandeService,private ligneCommandeService:LignecommandeService,private productService:ProduitService,private familleService:FamilleService) 
  {

   }

  ngOnInit(): void {

    localStorage.setItem("cmd",this.commandeService.create()) 
    //creation commande 
    this.familleList=this.familleService.getAll();//ToDo: Create getAll function in familleService
    this.isChange()
    this.cmd = localStorage.getItem('cmd');
    this.mntTTC = localStorage.getItem('mntTTC');
    
    this.selctedFam=''
  }
  ngOnChanges():void{
    localStorage.removeItem('selectFam')
    console.log('selected famille =',this.selctedFam);
    

  }
  isChange(){
    //
    console.log('selectedfam =',this.selctedFam);
    console.log('localStorage',localStorage.getItem('selectFam'));
    
    if(this.selctedFam === localStorage.getItem('selectFam')&&this.selctedFam!==undefined){ 
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
}
//**
/* 
* update is executed in popup onclick(button)
 * @param commande 
 * @param codeClient 
 */
updateCommand(commande:Commande,codeClient:string){
  commande.client = this.getClientByCodeClient(codeClient);
  this.mntTTC = localStorage.getItem('mntTTC');
  commande.montantTTC=Number(this.mntTTC);
  commande.date=new Date();
  commande.status=true;
  this.commandeService.update(commande) // ToDo : Create add in commandeService  
}
getLigneCommandeByIDCommande(numCmd:string)
{
 this.ligneCommandeService.getAllByNumCmdCommande(numCmd) // ToDo : Create getAllByIDCommande function in ligneCommandeService 
}

paye(){
  this.updateCommand(this.commandeService.getCmdBynumCmd(this.cmd),'2233')
  console.log('ok');
  console.log(this.commandeService.getCmdBynumCmd(this.cmd));
  ;
}
}
