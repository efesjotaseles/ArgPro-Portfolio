import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducacionComponent } from './educacion/educacion.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path: 'navbar', component: NavbarComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'estudios', component: EducacionComponent},
  {path: 'experiencias', component: ExperienciaComponent}
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
