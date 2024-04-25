import { Component } from '@angular/core';
import { VeiculoService } from '../veiculos.service';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { IVeiculo } from '../interface/iveiculo';

@Component({
  selector: 'app-mostrar-veiculo',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, RouterModule, MatIconModule, HttpClientModule,],
  templateUrl: './mostrar-veiculo.component.html',
  styleUrl: './mostrar-veiculo.component.css'
})
export class MostrarVeiculoComponent {


  id: any = '';
  veiculo: any = {}
  constructor(private veiculoService: VeiculoService, private activatedRoute : ActivatedRoute){}
  
  async ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      this.id = param.get('id');
    })
    this.veiculo = await this.veiculoService.obterUm(this.id).toPromise()
    console.log(this.veiculo)
  }

  submit(){
    return this.veiculoService.editarVeiculo(this.veiculo, this.veiculo.id)
      .subscribe(() => alert("editado com sucesso!"))
  }

}
