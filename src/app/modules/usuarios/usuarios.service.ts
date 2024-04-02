import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsuarios } from './IUsuarios';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private httpClient: HttpClient) {
    //console.log(httpClient)
  }

  obterTodos(){
    return this.httpClient.get<IUsuarios[]>(`${environment.url}usuario`)
  }

  excluirUsuario(id: string){
    return this.httpClient.delete<IUsuarios>(`${environment.url}usuario/${id}`).toPromise()
  }

//   editarCarro(id: string, carro: IUsuarios){
//     return this.httpClient.patch<IUsuarios>(`${environment}cars/${id}`, carro).toPromise()
//   }
}