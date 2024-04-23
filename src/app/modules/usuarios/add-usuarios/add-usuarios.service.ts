import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { AddUsuarios } from "./add-usuario.dto";

@Injectable({
    providedIn: 'root'
})
export class AddUsuariosService {

    constructor(
        private httpClient: HttpClient
    ){}
  
    cadastrarUsuario(usuario: AddUsuarios){
        return this.httpClient.post<AddUsuarios>(`${environment.url}usuario`, usuario)
    }
}