import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ListProductComponent } from './core/list-product/list-product.component';
import { ProductComponent } from './core/product/product.component';
import { AddProductComponent } from './core/add-product/add-product.component';


@NgModule({
  declarations: [
    ListProductComponent,
    ProductComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
