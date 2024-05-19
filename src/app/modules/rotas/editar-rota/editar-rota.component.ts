import { Component, OnInit } from '@angular/core';
import { IRota } from '../interface/IRota';
import { RotasService } from '../rotas-service/rotas.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet, RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-rota',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, FormsModule, RouterModule, MatIconModule],
  templateUrl: './editar-rota.component.html',
  styleUrl: './editar-rota.component.css'
})
export class EditarRotaComponent implements OnInit {

  rota: any = {}
  id: any = '';

  constructor(
    private readonly rotasService: RotasService,
    private readonly activatedRoute : ActivatedRoute
  ){}

  async ngOnInit(){
    this.activatedRoute.paramMap.subscribe(param => {
      this.id = param.get('id');
    })
    this.rota = await this.rotasService.obterUmRota(this.id).toPromise()
  }




  submit(rota: IRota){
    return this.rotasService.cadastraRota(rota).subscribe(() => alert("Rota cadastrada com sucesso!"))
  }

}
