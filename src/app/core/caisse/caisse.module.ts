import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaisseRoutingModule } from './caisse-routing.module';
import { CaisseComponent } from './caisse.component';
import { FamilleComponent } from './famille/famille.component';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    CaisseComponent,
    FamilleComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    CaisseRoutingModule
  ]
})
export class CaisseModule { }
