import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaisseRoutingModule } from './caisse-routing.module';
import { CaisseComponent } from './caisse.component';
import { FamilleComponent } from './famille/famille.component';
import { ProductComponent } from './product/product.component';
import { CommandeComponent } from './commande/commande.component';


@NgModule({
  declarations: [
    CaisseComponent,
    FamilleComponent,
    ProductComponent,
    CommandeComponent
  ],
  imports: [
    CommonModule,
    CaisseRoutingModule
  ],
  exports:[ProductComponent,FamilleComponent]
})
export class CaisseModule { }
