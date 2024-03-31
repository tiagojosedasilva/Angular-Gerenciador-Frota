import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsuarios } from './IUsuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private httpClient: HttpClient) {
    //console.log(httpClient)
  }

  obterTodos(){
    return this.httpClient.get(`https://frothub.onrender.com/usuario`).toPromise()
  }

//   cadastrarCarro(carro: IUsuarios){
//     return this.httpClient.post<IUsuarios>(`${environment}cars`, carro).toPromise()
//   }

//   excluirCarro(id: string){
//     return this.httpClient.delete<IUsuarios>(`${environment}cars/${id}`).toPromise()
//   }

//   editarCarro(id: string, carro: IUsuarios){
//     return this.httpClient.patch<IUsuarios>(`${environment}cars/${id}`, carro).toPromise()
//   }
}