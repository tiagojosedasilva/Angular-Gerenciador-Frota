import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterModule } from '@angular/router';
import { VeiculoService } from './veiculos.service';
import { Observable } from 'rxjs';
import { IVeiculo } from './interface/iveiculo';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-veiculos',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, FormsModule, RouterModule, MatIconModule,],
  providers: [VeiculoService],
  templateUrl: './veiculos.component.html',
  styleUrl: './veiculos.component.css'
})
export class VeiculosComponent implements OnInit{

  constructor(private veiculoService: VeiculoService){}

  veiculos = new Observable<IVeiculo[]>; 

  ngOnInit(): void {
    this.obterTodos()
    console.log(this.veiculos)
  }

  obterTodos(){
    this.veiculos = this.veiculoService.obterTodos()
    return this.veiculos
  }
}
