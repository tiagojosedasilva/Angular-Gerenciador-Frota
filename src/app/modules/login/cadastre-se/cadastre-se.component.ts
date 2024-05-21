import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';
import { IUsuarios } from '../../usuarios/listar-usuarios/IUsuarios';

@Component({
  selector: 'app-cadastre-se',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, FormsModule, RouterModule, MatIconModule],
  templateUrl: './cadastre-se.component.html',
  styleUrl: './cadastre-se.component.css'
})
export class CadastreSeComponent implements OnInit{

  account = {
    nome: '',
    email: '',
    senha: '',
    confirmar: ''
  }

  constructor(
    private accountService: AuthService,
    private router: Router
  ){}

  ngOnInit(): void {
  }

  // submit(){
  //   this.router.navigate(['usuarios'])
  // }

  async submit(){
    if (this.account.senha != this.account.confirmar || (!this.account.nome || this.account.nome == '') || (!this.account.email || this.account.email == '')) {
      alert("Dados inválidos para cadastro, por favor tente novamente!")
      this.router.navigate(['cadastre-se'])
    }
    else if (this.account.senha === this.account.confirmar) {
      let novoUsuario: IUsuarios = {
        email: this.account.email,
        senha: this.account.senha,
        id: '0',
        nome: this.account.nome,
        idCliente: 0,
        idVeiculo: null,
        tipoUsuario: 0,
        cpf: '',
        rg: '',
        dataNascimento: '',
        celular: '',
        endereco: '',
        cep: '',
        cidade: '',
        estado: '',
        statusConta: '',
        cnh: '',
        validade: '',
        genero: '',
        categoria: '',
        historicoInfracoes: '',
        historicoAcidentes: '',
        banco: '',
        numeroConta: '',
        digitoVerificador: '',
        tipo: '',
        nomeEmergencia: '',
        telefoneEmergencia: ''
      }
      const result = await this.accountService.createAccount(novoUsuario);
      this.router.navigate(['usuarios'])
    }
    else{
      alert('As senhas devem ser iguais!')
    }
  }
  
}
