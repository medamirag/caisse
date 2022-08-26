import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { LignecommandeService } from 'src/app/services/lignecommande.service';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
products!:Product[];
@Input() num:number=0
  constructor(private produitSer:ProduitService,private lignecmdservice:LignecommandeService) { }

  ngOnInit(): void {
  
this.products=this.produitSer.getAllProductByIDFamille(Number(localStorage.getItem('selectFam')))

}
ngOnChanges(): void{
  this.products=this.produitSer.getAllProductByIDFamille(Number(localStorage.getItem('selectFam')))
}

addProduct(product:Product){
   this.lignecmdservice.addByCommande(product)
   const numCmd=localStorage.getItem('cmd')
this.num++
   console.log(this.lignecmdservice.getAllByNumCmdCommande(numCmd))
}


}
