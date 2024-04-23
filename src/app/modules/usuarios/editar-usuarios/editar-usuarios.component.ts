import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet, RouterModule, ActivatedRoute } from '@angular/router';
import { IUsuarios } from '../listar-usuarios/IUsuarios';
import { EditarUsuariosService } from './editar-usuarios.service';
import { Observable, Observer, Operator, Subscription } from 'rxjs';

@Component({
  selector: 'app-editar-usuarios',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, RouterModule, MatIconModule, HttpClientModule,],
  providers: [EditarUsuariosService],
  templateUrl: './editar-usuarios.component.html',
  styleUrl: './editar-usuarios.component.css'
})
export class EditarUsuariosComponent implements OnInit{

  id: any = '';
  usuario: any = ''
  constructor(private editarUsuarioService: EditarUsuariosService, private activatedRoute : ActivatedRoute){}
  
  async ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      this.id = param.get('id');
    })
    this.usuario = await this.editarUsuarioService.buscarUsuario(this.id).toPromise()
    console.log(this.usuario)
  }

  submit(){
    if (this.usuario.nome == '' || this.usuario.email == '' || this.usuario.celular == '' || this.usuario.rg == ''|| this.usuario.cpf == '' || this.usuario.cnh == '' ) {
      alert("Por favor preencha os campos abaixo!")
      return;
    }

    // console.log(this.usuario)
    return this.editarUsuarioService.editarUsuario(this.usuario, this.usuario.id)
      .subscribe(() => alert("editado com sucesso!"))
  }


}
