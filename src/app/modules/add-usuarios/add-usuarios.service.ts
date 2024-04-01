import { Injectable } from "@angular/core";
import { IUsuarios } from "../usuarios/IUsuarios";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class AddUsuariosService {

    constructor(
        private httpClient: HttpClient
    ){}
  
    cadastrarUsuario(usuario: IUsuarios){
        return this.httpClient.post<IUsuarios>(`${environment.url}usuario`, usuario)
    }
}