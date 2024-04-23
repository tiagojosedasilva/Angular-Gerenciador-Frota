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

  obterUm(id: number){
    return this.httpClient.get<IVeiculo[]>(`${environment.url}veiculos/${id}`)
  }

  excluirVeiculo(id: string){
    return this.httpClient.delete<IVeiculo>(`${environment.url}veiculos/${id}`)
  }

  cadastrarVeiculos(veiculo: IVeiculo){
    return this.httpClient.post<IVeiculo>(`${environment.url}veiculos`, veiculo)
  }

  editarVeiculo(id: string, veiculo: IVeiculo){
    return this.httpClient.patch<IVeiculo>(`${environment.url}veiculos/${id}`, veiculo)
  }
}