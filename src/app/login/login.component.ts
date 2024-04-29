import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component'
import { LoginService } from '../service/login.service';
import { UsuarioClass } from '../usuario/usuario-class';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
    // Lógica de inicialización si es necesaria
  }

  json: string = '';
  title = 'frontedAngular';
  correo!: string;
  password!: string;
  usuario: any = {}
  error: boolean = false;

  login() {
    this.usuarioService.logIn(this.usuario)
      .subscribe(user => {
        localStorage.setItem('Usuario', JSON.stringify(user));
        console.log('sesion iniciada correctamente');
        console.log(user);
        this.router.navigate(['homepage']);

      }, error => console.log('Error: ' + error + this.correo + this.password));
  }

  mostrarAlert: boolean = false;
  componentePrincipal!: AppComponent

  constructor(private usuarioService: UsuarioService, private router: Router) { }

}
