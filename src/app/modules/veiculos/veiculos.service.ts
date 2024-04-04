import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { IVeiculo } from './interface/iveiculo';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  constructor(private httpClient: HttpClient) {
  }

  obterTodos(){
    return this.httpClient.get<IVeiculo[]>(`${environment.url}veiculos`)
  }

//   excluirUsuario(id: string){
//     return this.httpClient.delete<IUsuarios>(`${environment.url}usuario/${id}`)
//   }

//   editarCarro(id: string, carro: IUsuarios){
//     return this.httpClient.patch<IUsuarios>(`${environment}cars/${id}`, carro).toPromise()
//   }
}