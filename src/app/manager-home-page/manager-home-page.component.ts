import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioClass } from '../usuario/usuario-class';

@Component({
  selector: 'app-manager-homepage',
  template: ``,
  styles: [``]
})
export class ManagerHomepageComponent implements OnInit {

  
  constructor(private router: Router) { }

  ngOnInit(): void {
    let stringUser = localStorage.getItem("Usuario");
    let user: UsuarioClass = stringUser ? JSON.parse(stringUser) : null;
    let area = user.rol;

    if (area) {
      if (area == "Administrador") {
        this.router.navigate(["administrador"])
      } else if (area == "Recepcionista") {
        this.router.navigate(["areaMedico"])
      } else if (area == "Operador") {
        // this.router.navigate(["areaPaciente"])
      } else if (area == "4") {
        // this.router.navigate(["areaLaboratorio"])
      }
    }
    else {
      this.router.navigate(["login"])
    }
  }

}