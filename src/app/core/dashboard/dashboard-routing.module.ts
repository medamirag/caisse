import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'produit',loadChildren:()=>import('./product/product.module').then(m=>m.ProductModule)},
  {path:'famille',loadChildren:()=>import('./famille/famille.module').then(m=>m.FamilleModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
