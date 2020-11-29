import { Component, OnInit } from '@angular/core';
import { LoginReq } from 'src/app/models/loginReq';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: LoginReq;

  constructor(private authService: LoginService) {
    this.usuario = new LoginReq('', '');
  }

  ngOnInit() {
  }

  doLogin() {
    // Llamar a un servicio que mande la petición de login
    // a la API.
    this.authService.login(this.usuario).subscribe(resp => {
      localStorage.setItem('token', resp.token);
        alert('API TOKEN ' + localStorage.getItem('token'));
        console.log(localStorage.getItem('token'));

    });
  }
}
