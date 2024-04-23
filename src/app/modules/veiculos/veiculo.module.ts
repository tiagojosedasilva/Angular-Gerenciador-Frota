import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeiculosComponent } from './listar-veiculos/veiculos.component';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { AddVeiculosComponent } from './add-veiculos/add-veiculos.component';
import { HttpClientModule } from '@angular/common/http';
import { VeiculoService } from './listar-veiculos/veiculos.service';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    AddVeiculosComponent,
    CommonModule,
    HttpClientModule,
    UsuariosModule,
    VeiculosComponent,
    RouterModule, 
    RouterOutlet,
    MatIconModule,
  ],
  providers:[VeiculoService]
})
export class VeiculoModule { }
