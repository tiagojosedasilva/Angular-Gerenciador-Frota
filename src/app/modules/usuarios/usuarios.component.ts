import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, RouterOutlet } from '@angular/router';
import { UsuariosService } from './usuarios.service';
import { IUsuarios } from './IUsuarios';
import { error } from 'node:console';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, RouterModule, MatIconModule, HttpClientModule,],
  providers: [UsuariosService],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit {

  usuarios = new Observable<IUsuarios[]>;

  constructor(
    private usuariosService: UsuariosService,
    private httpClient: HttpClient
  ){}

  ngOnInit(): void {
    this.obterTodos();
  }

  obterTodos(){
    this.usuarios = this.usuariosService.obterTodos();
    return this.usuarios;
  }

  excluirUsuario(id: string){
    this.usuariosService.excluirUsuario(id)
    return this.obterTodos()
  }

  icone(genero: string){
    if (genero === "Masculino" || "masculino" || "M" || "m" || "homem" || "h") {
      return "face"
    }
    else if(genero === "Feminino" || "feminino" || "F" || "f" || "mulher" || "m"){
      return "tag_faces"
    }
    else{
      return "tag_faces"
    }
  }
}

