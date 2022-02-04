import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonesService {

  baseUrl=environment.baseUrl;
  

  

  constructor(private http: HttpClient) { }
 

  //Obtiene el pokemon
  getPokemons(index){
    return this.http.get<any>(`${this.baseUrl}/pokemon/${index}`);
  }
}
