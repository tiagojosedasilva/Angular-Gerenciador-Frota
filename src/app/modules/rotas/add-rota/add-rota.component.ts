import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet, RouterModule } from '@angular/router';
import { RotasService } from '../rotas-service/rotas.service';
import { IRota } from '../interface/IRota';

@Component({
  selector: 'app-add-rota',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, FormsModule, RouterModule, MatIconModule],
  templateUrl: './add-rota.component.html',
  styleUrl: './add-rota.component.css'
})
export class AddRotaComponent {
// export class AddRotaComponent implements OnInit{
  
  constructor(private readonly rotasService: RotasService){}


  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }


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



  submit(rota: IRota){
    return this.rotasService.cadastraRota(rota).subscribe(() => alert("Rota cadastrada com sucesso!"))
  }
}
