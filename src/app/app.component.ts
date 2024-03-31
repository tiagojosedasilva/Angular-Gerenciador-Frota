import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { UsuariosComponent } from './modules/usuarios/usuarios.component';
import { VeiculosComponent } from './modules/veiculos/veiculos.component';
import { navbarData } from './nav-data';
import { routes } from './app.routes';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

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
    ReactiveFormsModule,
    UsuariosComponent,
    VeiculosComponent,
  ],

})
export class AppComponent implements OnInit {
  navData = navbarData;
  visible = false;

  ngOnInit() {
  }

  toggleDisplay(){
    this.visible = !this.visible
  }
}