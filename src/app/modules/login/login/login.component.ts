import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, FormsModule, RouterModule, MatIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  login = {
    email: '',
    senha: ''
  }

  constructor(
    private accountService: AuthService,
    private router: Router,
    private http: HttpClient,
  ){}

  ngOnInit(): void {}

  async submit(){
    try {
      if (this.login.email == '' || this.login.senha == '') {
        alert("Usuário e/ou senha inválidos!")
      }
      const result = await this.accountService.login(this.login);
      // console.log(`login efetado: ${result}`);

      if  (result != true && (this.login.email != '' || this.login.senha != '')) {
        alert("Usuário e/ou senha inválidos!")
      }
      else if (result === true){
        this.router.navigate(['usuarios'])
        
      }
    } catch (error) {
      console.log(error)
    }
  }

  // async submit(user: any){
  //   const result = await this.http.post<any>(`${environment.url}auth/login`, user).toPromise();
  //   if(result && result.acces_token){
  //     window.localStorage.setItem('token', result.acces_token);
  //     this.router.navigate(['usuarios'])
  //     return true;
  //   }
  //   return false
  // }

}
