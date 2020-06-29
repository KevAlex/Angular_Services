import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeldenComponent } from './pages/helden/helden.component';
import { HeldComponent } from './pages/held/held.component';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeldenComponent,
    HeldComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
