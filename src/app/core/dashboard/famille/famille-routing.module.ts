import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFamilleComponent } from './core/add-famille/add-famille.component';
import { ListFamilleComponent } from './core/list-famille/list-famille.component';

const routes: Routes = [
  {path:'',component:ListFamilleComponent},
  {path:'addfamille',component:AddFamilleComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FamilleRoutingModule { }
