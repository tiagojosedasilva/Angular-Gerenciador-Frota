import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule, RouterOutlet, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { UsuariosComponent } from './modules/usuarios/listar-usuarios/usuarios.component';
import { VeiculosComponent } from './modules/veiculos/listar-veiculos/veiculos.component';
import { navbarData } from './nav-data';
import { routes } from './app.routes';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { EditarUsuariosComponent } from './modules/usuarios/editar-usuarios/editar-usuarios.component';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { VeiculoModule } from './modules/veiculos/veiculo.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    MatIconModule,
    RouterOutlet,
    RouterLink,
    CommonModule,
    RouterModule, // Use forChild for non-root modules
    FormsModule,
    MatButtonModule, 
    MatMenuModule,
    ReactiveFormsModule,
    UsuariosModule,
    VeiculoModule,
    EditarUsuariosComponent
  ],

})
export class AppComponent implements OnInit {
  [x: string]: any;
  navData = navbarData;
  visible = false;
  
  ngOnInit() {
  }

  toggleDisplay(){
    this.visible = !this.visible
  }

  // @if (!autenticado) {
  //   this.result = false
  // }else{
  //   this.result = true
  // }

}