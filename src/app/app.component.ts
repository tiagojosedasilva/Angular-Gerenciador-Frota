import { Component, IterableChanges, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
import { httpInterceptorsProviders } from './auth/http-interceptors';

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
  providers: [
    // httpInterceptorsProviders
  ]

})
export class AppComponent implements OnInit, OnChanges {

  [x: string]: any;
  navData = navbarData;
  visible = false;
  login = false;
  
  
  async ngOnInit() {
    this.login
    return await this.autenticado()
  }
  
  async ngOnChanges(){
    this.login
    return await this.ngOnInit() 
  }
  
  async sair(){
    window.localStorage.clear()
    return await this.ngOnInit()
  }
  
  autenticado(){
    const storage = window.localStorage.getItem('token') ? window.localStorage.getItem('token') : null 
    if (storage) {
      this.login = true;
    }else{
      this.login = false;
    }
    this.ngOnInit()
  }
  
  toggleDisplay(){
    this.visible = !this.visible
  }

}