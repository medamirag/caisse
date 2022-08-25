import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FamilleRoutingModule } from './famille-routing.module';
import { ListFamilleComponent } from './core/list-famille/list-famille.component';
import { FamilleComponent } from './core/famille/famille.component';
import { AddFamilleComponent } from './core/add-famille/add-famille.component';


@NgModule({
  declarations: [
    ListFamilleComponent,
    FamilleComponent,
    AddFamilleComponent
  ],
  imports: [
    CommonModule,
    FamilleRoutingModule
  ]
})
export class FamilleModule { }
