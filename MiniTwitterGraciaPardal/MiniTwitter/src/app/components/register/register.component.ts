import { Component, OnInit } from '@angular/core';
import { SingUpRequest } from 'src/app/models/SignUpReq';
import { User } from 'src/app/models/tweetResp';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  nuevoUser:SingUpRequest;

  constructor(private singUpService: RegistroService) {
    this.nuevoUser = new SingUpRequest ('', '', '' );
   }

  ngOnInit(){

  }

  registrar(){
    this.singUpService.registro(this.nuevoUser).subscribe(resp=>{
        alert("Registrado" + resp.username)
    });

  }

}
