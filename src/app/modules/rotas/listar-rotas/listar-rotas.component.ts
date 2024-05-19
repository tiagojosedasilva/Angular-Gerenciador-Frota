import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet, RouterModule } from '@angular/router';
import { IRota } from '../interface/IRota';
import { RotasService } from '../rotas-service/rotas.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-rotas',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, RouterModule, MatIconModule, HttpClientModule,],
  templateUrl: './listar-rotas.component.html',
  styleUrl: './listar-rotas.component.css'
})
export class ListarRotasComponent implements OnInit{
  
  rotas: any = new Observable<IRota[]>;
  
  constructor(
    private readonly rotasService: RotasService
  ){}

  async ngOnInit(){
   await this.obterTodos()
  }

  async obterTodos(){
    this.rotas = await this.rotasService.obterTodos()
    return this.rotas
  }

  async excluirRota(id: number){
    await this.rotasService.excluirRota(id).subscribe(() => alert("Rota Excluida com sucesso!"))
    return this.ngOnInit()
  }
}
