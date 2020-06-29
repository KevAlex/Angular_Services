import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeldenComponent } from './pages/helden/helden.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeldComponent } from './pages/held/held.component';



const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'helden', component: HeldenComponent},
  {path: 'held/:id', component: HeldComponent},
  {path: "**", pathMatch: "full", redirectTo:"home" }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
