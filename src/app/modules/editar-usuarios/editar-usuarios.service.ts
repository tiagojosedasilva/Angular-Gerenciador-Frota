import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { IUsuarios } from "../usuarios/IUsuarios";

@Injectable({
    providedIn: 'root'
})
export class EditarUsuariosService {

    constructor(
        private httpClient: HttpClient
    ){}

    buscarUsuario(id: string){
        return this.httpClient.get<IUsuarios>(`${environment.url}usuario/${id}`)
    }
  
    editarUsuario(usuario: IUsuarios, id: string){
        return this.httpClient.patch<IUsuarios>(`${environment.url}usuario/${id}`, usuario)
    }
}