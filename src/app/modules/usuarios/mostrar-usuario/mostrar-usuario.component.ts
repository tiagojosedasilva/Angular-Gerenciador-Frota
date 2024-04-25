import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { EditarUsuariosService } from '../editar-usuarios/editar-usuarios.service';
import { EditarUsuariosComponent } from '../editar-usuarios/editar-usuarios.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-mostrar-usuario',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, RouterModule, MatIconModule, HttpClientModule,],
  templateUrl: './mostrar-usuario.component.html',
  styleUrl: './mostrar-usuario.component.css'
})
export class MostrarUsuarioComponent implements OnInit{

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
