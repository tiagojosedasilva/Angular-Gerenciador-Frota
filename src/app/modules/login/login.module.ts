import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CadastreSeComponent } from './cadastre-se/cadastre-se.component';



@NgModule({
  declarations: [],
  imports: [
    CadastreSeComponent,
    CommonModule,
    LoginComponent
  ]
})
export class LoginModule { }
