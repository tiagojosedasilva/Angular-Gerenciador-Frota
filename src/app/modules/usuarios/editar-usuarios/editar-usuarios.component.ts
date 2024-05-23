import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet, RouterModule, ActivatedRoute } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { EditarUsuariosService } from './editar-usuarios.service';
import { VeiculoService } from '../../veiculos/listar-veiculos/veiculos.service';


@Component({
  selector: 'app-editar-usuarios',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, FormsModule, RouterModule, MatIconModule, MatFormFieldModule, MatSelectModule, MatInputModule],
  providers: [EditarUsuariosService],
  templateUrl: './editar-usuarios.component.html',
  styleUrl: './editar-usuarios.component.css'
})
export class EditarUsuariosComponent implements OnInit{

  id: any = '';
  usuario: any = ''
  carros: any

  constructor(
    private editarUsuarioService: EditarUsuariosService, 
    private activatedRoute : ActivatedRoute,
    private veiculosService: VeiculoService,
  ){}
  
  async ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      this.id = param.get('id');
    })
    this.usuario = await this.editarUsuarioService.buscarUsuario(this.id).toPromise()
    this.carros = await this.veiculosService.obterTodos().toPromise()
    // console.log(this.usuario)
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
