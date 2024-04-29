import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UsuarioService } from './service/usuario.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AdministradorComponent } from './administrador/administrador.component';
import { ManagerHomepageComponent } from './manager-home-page/manager-home-page.component';
import { EspacioAdminComponent } from './espacionAdmin/espacio-admin/espacio-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdministradorComponent,
    ManagerHomepageComponent,
    EspacioAdminComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
