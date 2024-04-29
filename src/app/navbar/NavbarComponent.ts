import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../Service/login.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router, private service: LoginService) { }


  email: String = "";
  userLoggedIn() {
    return localStorage.getItem('usuario') ? true : false;
  }

  logOut() {
    localStorage.removeItem('usuario');
    localStorage.removeItem('area');
    this.router.navigate(['/homepage']);
    this.service.putCerrarConexionDB("a").subscribe(data => {
      console.log(data);
    }, error => { console.log(error); });
  }


}
