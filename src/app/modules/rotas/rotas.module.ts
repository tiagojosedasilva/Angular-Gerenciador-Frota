import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapaComponent } from './mapa/mapa.component';
import { AddRotaComponent } from './add-rota/add-rota.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet, RouterModule } from '@angular/router';
import { UsuariosModule } from '../usuarios/usuarios.module';

@NgModule({
  declarations: [],
  imports: [
    RouterOutlet, 
    FormsModule, 
    RouterModule, 
    MatIconModule, 
    HttpClientModule,
    CommonModule,
    MapaComponent,
    AddRotaComponent,
    UsuariosModule
  ]
})
export class RotasModule { }
