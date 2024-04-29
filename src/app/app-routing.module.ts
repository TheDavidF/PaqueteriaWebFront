import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { AdministradorComponent } from './administrador/administrador.component';
import { ManagerHomepageComponent } from './manager-home-page/manager-home-page.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [

  { path:'homepage', component: ManagerHomepageComponent },

  {path : '', redirectTo: 'homepage', pathMatch: 'full'},
  
  { path: 'login', component: LoginComponent },

  { path: 'administrador', component: AdministradorComponent, 
    children: [
      { path: 'usuario', component: UsuarioComponent}
    ]
  },

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
