import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet, RouterModule } from '@angular/router';
import { IRota } from '../interface/IRota';

@Component({
  selector: 'app-listar-rotas',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, RouterModule, MatIconModule, HttpClientModule,],
  templateUrl: './listar-rotas.component.html',
  styleUrl: './listar-rotas.component.css'
})
export class ListarRotasComponent {

  rotas: IRota[] = [];

  excluirRota(id: number){}
}
