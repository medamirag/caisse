import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesktopComponent } from './core/desktop/desktop.component';
import { FamilleComponent } from './core/caisse/famille/famille.component';
import { CaisseModule } from './core/caisse/caisse.module';

@NgModule({
  declarations: [
    AppComponent,
    DesktopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CaisseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
