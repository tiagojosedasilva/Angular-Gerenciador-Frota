import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet, RouterModule } from '@angular/router';
import { IUsuarios } from '../usuarios/IUsuarios';
import { EditarUsuariosService } from './editar-usuarios.service';

@Component({
  selector: 'app-editar-usuarios',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, RouterModule, MatIconModule, HttpClientModule,],
  providers: [EditarUsuariosService],
  templateUrl: './editar-usuarios.component.html',
  styleUrl: './editar-usuarios.component.css'
})
export class EditarUsuariosComponent implements OnInit{

  id: string = '';
  constructor(private editarUsuarioService: EditarUsuariosService){}

  ngOnInit(): void {
    this.editarUsuarioService.buscarUsuario(this.id)
  }

  usuario: IUsuarios = {
    id: '',
    nome: '',
    idCliente: 1,
    email: '',
    senha: '',
    tipoUsuario: 0,
    cpf: '',
    rg: '',
    dataNascimento: "",
    celular: '',
    endereco: '',
    cep: '',
    cidade: '',
    estado: '',
    statusConta: 'ATIVO',
    cnh: '',
    genero: '',
    categoria: '',
    historicoInfracoes: '',
    historicoAcidentes: '',
    banco: '',
    numeroConta: '',
    digitoVerificador: '',
    tipo: '',
    nomeEmergencia: '',
    telefoneEmergencia: '',
    validade: '',
  };

  // submit(){
  //   if (this.usuario.nome == '' || this.usuario.email == '' || this.usuario.celular == '' || this.usuario.rg == ''|| this.usuario.cpf == '' || this.usuario.cnh == '' ) {
  //     alert("Por favor preencha os campos abaixo!")
  //     return;
  //   }

  //   // console.log(this.usuario)
  //   return this.editarUsuarioService.editarUsuario(this.usuario)
  //     .subscribe(() => alert("editado com sucesso!"))
  // }


}
