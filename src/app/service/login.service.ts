import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'http://localhost:8080/PaqueteriaWeb';
  admin: any;
  jsonContent: string;
  constructor(private http: HttpClient) {
    this.jsonContent='';
   }

   

   putCerrarConexionDB(cerrar:String){
      return this.http.put<String>(this.url,cerrar);
   }
}
