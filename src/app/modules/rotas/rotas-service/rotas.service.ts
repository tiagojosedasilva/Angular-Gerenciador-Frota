import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { IRota } from '../interface/IRota';
import { UsuariosService } from '../../usuarios/listar-usuarios/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class RotasService {

  constructor(
    private httpClient: HttpClient,
    private usuariosService: UsuariosService
  ) {
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

  editarRota(id: string, rota: IRota){
    return this.httpClient.patch<IRota>(`${environment.url}rotas/${id}`, rota).toPromise()
  }

  obterUmRota(id: string){
    return this.httpClient.get<IRota>(`${environment.url}rotas/${id}`)
  }

  async obterUsuarios(){
    return await this.usuariosService.obterTodos()
  }
}