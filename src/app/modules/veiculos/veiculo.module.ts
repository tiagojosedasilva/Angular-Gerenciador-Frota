import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeiculosComponent } from './listar-veiculos/veiculos.component';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { AddVeiculosComponent } from './add-veiculos/add-veiculos.component';
import { HttpClientModule } from '@angular/common/http';
import { VeiculoService } from './listar-veiculos/veiculos.service';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, RouterOutlet } from '@angular/router';
import { EditarVeiculosComponent } from './editar-veiculos/editar-veiculos.component';
import { MostrarVeiculoComponent } from './mostrar-veiculo/mostrar-veiculo.component';

@NgModule({
  declarations: [],
  imports: [
    AddVeiculosComponent,
    CommonModule,
    EditarVeiculosComponent,
    HttpClientModule,
    MostrarVeiculoComponent,
    UsuariosModule,
    VeiculosComponent,
    RouterModule, 
    RouterOutlet,
    MatIconModule,
  ],
  providers:[VeiculoService]
})
export class VeiculoModule { }
