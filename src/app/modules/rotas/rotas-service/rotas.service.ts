import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RotasService {

  constructor(private httpClient: HttpClient) {
  }

  obterTodos(){
    // return this.httpClient.get<IUsuarios[]>(`${environment.url}usuario`)
  }

  excluirUsuario(id: string){
    // return this.httpClient.delete<IUsuarios>(`${environment.url}usuario/${id}`)
  }

//   editarCarro(id: string, carro: IUsuarios){
//     return this.httpClient.patch<IUsuarios>(`${environment}cars/${id}`, carro).toPromise()
//   }
}