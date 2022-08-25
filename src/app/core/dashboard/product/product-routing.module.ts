import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './core/add-product/add-product.component';
import { ListProductComponent } from './core/list-product/list-product.component';

const routes: Routes = [
  {path:'',component:ListProductComponent},
  {path:'addproduit',component:AddProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
