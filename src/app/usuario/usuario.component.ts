import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { UsuarioClass } from './usuario-class';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent implements OnInit{
  usuario!: UsuarioClass;
  componentePrincipal!: AppComponent;
  
  constructor(private service: UsuarioService){
    this.usuario = new UsuarioClass;
  }

    ngOnInit(): void {
      this.service.logIn(this.usuario)
      .subscribe(data=> {
        this.usuario = data;
        console.log(data);
      }, err=> {console.log(err)})
    }

}
