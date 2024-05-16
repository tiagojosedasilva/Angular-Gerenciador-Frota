import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { IRota } from '../interface/IRota';

@Injectable({
  providedIn: 'root'
})
export class RotasService {

  constructor(private httpClient: HttpClient) {
  }

  obterTodos(){
    return this.httpClient.get<IRota[]>(`${environment.url}rotas`)
  }

  cadastraRota(rota: IRota){
    return this.httpClient.post<IRota[]>(`${environment.url}rotas`, rota)
  }

  excluirRota(id: number){
    return this.httpClient.delete<IRota>(`${environment.url}rotas/${id}`)
  }

  // editarCarro(id: string, carro: IRota){
  //   return this.httpClient.patch<IRota>(`${environment}cars/${id}`, carro).toPromise()
  // }
}