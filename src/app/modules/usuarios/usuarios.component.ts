import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, RouterOutlet } from '@angular/router';
import { UsuariosService } from './usuarios.service';
import { IUsuarios } from './IUsuarios';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, RouterModule, MatIconModule, HttpClientModule,],
  providers: [UsuariosService],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit {

  usuarios: any;

  constructor(
    private usuariosService: UsuariosService
  ){}


  ngOnInit(): void {
    this.obterTodos;
    console.log(this.usuarios)
  }
  

  async obterTodos(){
    this.usuarios = await this.usuariosService.obterTodos().then((usuario: any) => {
      return this.usuarios = usuario;
    });
  }
}

