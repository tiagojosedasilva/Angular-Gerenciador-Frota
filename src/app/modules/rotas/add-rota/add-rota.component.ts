import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet, RouterModule } from '@angular/router';
import { RotasService } from '../rotas-service/rotas.service';
import { IRota } from '../interface/IRota';
import { IUsuarios } from '../../usuarios/listar-usuarios/IUsuarios';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { UsuariosService } from '../../usuarios/listar-usuarios/usuarios.service';

@Component({
  selector: 'app-add-rota',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, FormsModule, RouterModule, MatIconModule, MatFormFieldModule, MatSelectModule, MatInputModule],
  templateUrl: './add-rota.component.html',
  styleUrl: './add-rota.component.css'
})
// export class AddRotaComponent {
  
  export class AddRotaComponent implements OnInit{
    
    constructor(
      private readonly rotasService: RotasService,
      private readonly usuariosService: UsuariosService,
    ){}
    
    usuarios: any;
    selectedValue: any;

    async ngOnInit(){
      this.usuarios = await this.usuariosService.obterTodos().toPromise()
    }


  rota: IRota = {
    id: 0,
    destino: "",
    idVeiculo: 0,
    cidade: "",
    bairro: "",
    numero: 0,
    complemento: "",
    distancia: "",
    consumo: "",
    placa: "",
    referencia: "",
    idCondutor: 0,
    // condutor: 0
  }

 
  // [
    // {value: 'steak-0', viewValue: 'Steak'},
    // {value: 'pizza-1', viewValue: 'Pizza'},
    // {value: 'tacos-2', viewValue: 'Tacos'},
  // ];



  submit(rota: IRota){
    return this.rotasService.cadastraRota(rota).subscribe(() => alert("Rota cadastrada com sucesso!"))
  }
}
