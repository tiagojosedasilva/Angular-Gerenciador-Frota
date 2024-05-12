import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-rota',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, FormsModule, RouterModule, MatIconModule],
  templateUrl: './add-rota.component.html',
  styleUrl: './add-rota.component.css'
})
export class AddRotaComponent {

  rota: any = {}

  submit(){}
}
