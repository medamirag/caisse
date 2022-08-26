import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesktopComponent } from './core/desktop/desktop.component';

const routes: Routes = [
  {path:'',component:DesktopComponent},
  {path:'login',loadChildren:()=>import ('./core/auth/auth.module').then(m=>m.AuthModule)},
  {path:'caisse',loadChildren:()=>import ('./core/caisse/caisse.module').then(m=>m.CaisseModule)},
  {path:'admin',loadChildren:()=>import ('./core/dashboard/dashboard.module').then(m=>m.DashboardModule)},
  {path:'**',redirectTo:""},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
