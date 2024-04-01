import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet, RouterModule } from '@angular/router';
import { IUsuarios } from '../usuarios/IUsuarios';

@Component({
  selector: 'app-add-usuarios',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, FormsModule, RouterModule, MatIconModule],
  templateUrl: './add-usuarios.component.html',
  styleUrl: './add-usuarios.component.css'
})
export class AddUsuariosComponent {

  usuario: IUsuarios = {
    nome: '',
    idCliente: 0,
    email: '',
    senha: '',
    tipoUsuario: 0,
    cpf: '',
    rg: '',
    dataNascimento: null,
    celular: '',
    endereço: '',
    cep: '',
    cidade: '',
    estado: '',
    statusConta: ''
  };

}
