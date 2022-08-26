import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { LigneCommande } from 'src/app/models/lignecommande';
import { CommandeService } from 'src/app/services/commande.service';
import { LignecommandeService } from 'src/app/services/lignecommande.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.scss']
})
export class CommandeComponent implements OnInit  {
  lignesCmd:LigneCommande[]=[]
  mntTTC:number=0
  constructor(private ligneCmdService:LignecommandeService) { }
  numCmd=localStorage.getItem('cmd')
@Input() refresh:number=0
  ngOnInit(): void {
   this.lignesCmd= this.ligneCmdService.getAllByNumCmdCommande(this.numCmd) 
   console.log(this.refresh);
   console.log("init");
  //  this.calculMntTTC();
   
  }
  ngOnChanges() {
console.log("dqsdq");
this.lignesCmd= this.ligneCmdService.getAllByNumCmdCommande(this.numCmd) ;
this.calculMntTTC();
  }
calculMntTTC(){
  this.mntTTC=0
  this.lignesCmd.forEach(el=>this.mntTTC+=el.price)
 localStorage.setItem('mntTTC',''+this.mntTTC);
}

}
