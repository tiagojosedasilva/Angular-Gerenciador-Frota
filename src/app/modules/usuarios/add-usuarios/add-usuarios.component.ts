import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet, RouterModule } from '@angular/router';
import { IUsuarios } from '../listar-usuarios/IUsuarios';
import { AddUsuariosService } from './add-usuarios.service';
import { AddUsuarios } from './add-usuario.dto';
import { VeiculoService } from '../../veiculos/veiculos.service';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { UsuariosService } from '../../usuarios/listar-usuarios/usuarios.service';


@Component({
  selector: 'app-add-usuarios',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, FormsModule, RouterModule, MatIconModule, MatFormFieldModule, MatSelectModule, MatInputModule],
  templateUrl: './add-usuarios.component.html',
  styleUrl: './add-usuarios.component.css'
})
export class AddUsuariosComponent implements OnInit{

  carros: any

  constructor(
    private addUsuarioService: AddUsuariosService,
    private veiculosService: VeiculoService,
  ){}

  async ngOnInit(){
    this.carros = await this.veiculosService.obterTodos().toPromise()
  }

  usuario: AddUsuarios = {
    nome: '',
    idCliente: 1,
    idVeiculo: 0,
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
    validade: ''
  };

  submit(){
    if (this.usuario.nome == '' || this.usuario.email == '' || this.usuario.celular == '' || this.usuario.rg == ''|| this.usuario.cpf == '' || this.usuario.cnh == '' ) {
      alert("Por favor preencha os campos abaixo!")
      return;
    }

    // console.log(this.usuario)
    return this.addUsuarioService.cadastrarUsuario(this.usuario)
      .subscribe(() => alert("Cadastrado com sucesso"))
  }

}
