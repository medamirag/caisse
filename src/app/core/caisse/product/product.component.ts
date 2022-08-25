import { Component, OnInit } from '@angular/core';
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
  constructor(private produitSer:ProduitService,private lignecmdservice:LignecommandeService) { }

  ngOnInit(): void {
this.products=this.produitSer.getAllProductByIDFamille(Number(localStorage.getItem('selectFam')))

}
addProduct(product:Product){
  // this.lignecmdservice.
  
}

}
