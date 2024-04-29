import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioClass } from '../usuario/usuario-class';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
  
})
export class UsuarioService {

  

    url: string = 'http://localhost:8080/PaqueteriaWeb';
  
    constructor(private http: HttpClient) { }

    logIn(UsuarioClass: UsuarioClass){
      return this.http.post<UsuarioClass>(`${this.url}/login`,UsuarioClass);

    }
}
