import { Component, OnInit } from '@angular/core';
import { GebruikerLogin } from '../models/gebruiker-login.model';
import { AuthenticaService } from '../authentica.service';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  gebruikerLogin: GebruikerLogin = new GebruikerLogin(" ", " ");

  constructor(private _authenticateService : AuthenticaService, private fb: FormBuilder) { }
  
  onSubmit() {
    this._authenticateService.authenticate(this.gebruikerLogin).subscribe(result => {
      console.log(this.gebruikerLogin);
      localStorage.setItem("token", result.token + "");
      console.log("Token: " + result.token)
    });
  }

  ngOnInit() {
  }

  securityForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', [Validators.required]]
  });

}
