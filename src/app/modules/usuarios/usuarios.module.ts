import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet, RouterModule } from '@angular/router';
import { UsuariosService } from './listar-usuarios/usuarios.service';
import { UsuariosComponent } from './listar-usuarios/usuarios.component';



@NgModule({
  declarations: [],
  imports: [CommonModule, RouterOutlet, FormsModule, RouterModule, MatIconModule, HttpClientModule, UsuariosComponent],
  providers: [UsuariosService],
})
export class UsuariosModule { }
