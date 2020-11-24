import { Component, OnInit } from '@angular/core';
import { LoginDto } from '../../models/dto/login.dto';
import { LoginServiceService } from '../../services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: LoginDto;

  constructor(private authService: LoginServiceService) { 
    this.usuario = new LoginDto('', '');
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
