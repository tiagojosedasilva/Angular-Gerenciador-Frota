import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { VeiculoService } from '../veiculos.service';
import { IVeiculo } from '../interface/iveiculo';

@Component({
  selector: 'app-add-veiculos',
  standalone: true,
  imports: [HttpClientModule, FormsModule, RouterModule, MatIconModule],
  templateUrl: './add-veiculos.component.html',
  styleUrl: './add-veiculos.component.css'
})
export class AddVeiculosComponent {

  veiculo: IVeiculo = {
    id: 0,
    placa: '',
    modelo: '',
    marca: '',
    anoFabricacao: '',
    anoModelo: '',
    quilometragem: '',
    cor: '',
    tipoCombustivel: '',
    dataCriacao: ' - ',
    statusVeiculo: 0,
    volumeTanque: 0,
    consumoMedioLitro: 0
  }

  constructor(
    private readonly veiculoService: VeiculoService
  ){}

  submit(){
    this.veiculo.dataCriacao = new Date().toString()
    return this.veiculoService.cadastrarVeiculos(this.veiculo)
      .subscribe(() => alert("cadastrado"))
  }
}
