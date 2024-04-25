import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { VeiculoService } from '../veiculos.service';

@Component({
  selector: 'app-editar-veiculos',
  standalone: true,
  imports: [HttpClientModule, FormsModule, RouterModule, MatIconModule],
  templateUrl: './editar-veiculos.component.html',
  styleUrl: './editar-veiculos.component.css'
})
export class EditarVeiculosComponent implements OnInit {


  id: any;
  veiculo: any = ''

  constructor(
    private readonly veiculoService: VeiculoService,
    private readonly activatedRoute: ActivatedRoute,
  ){}


  async ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      this.id = param.get('id');
    })
    this.veiculo = await this.veiculoService.obterUm(this.id).toPromise()
  }

  submit(){
    return this.veiculoService.editarVeiculo(this.id, this.veiculo)
      .subscribe(() => alert("Editado com sucesso!"))
  }
}
