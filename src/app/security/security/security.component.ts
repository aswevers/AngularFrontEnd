import { Component, OnInit } from '@angular/core';
import { GebruikerLogin } from '../models/gebruiker-login.model';
import { AuthenticaService } from '../authentica.service';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {
  securityForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  gebruikerLogin: GebruikerLogin = new GebruikerLogin("", "");

  wrong:boolean;
  constructor(private _authenticateService : AuthenticaService, private fb: FormBuilder, private router:Router) {
    this.wrong = true;
   }
  
   //Logt gebruiker in en plaats gegevens in localStorage
  onSubmit() {
    this._authenticateService.authenticate(this.gebruikerLogin).subscribe(result => {
      localStorage.setItem("token", result.token + "");
      localStorage.setItem("user", result.email + "");
      localStorage.setItem("id", result.gebruikerId + "");
      this._authenticateService.isLoggedin.next(result.token ? true : false);
      this.router.navigate(['/dashboard']);
    }, err => {
      this.wrong = false;
    }
    );
    
  }

  ngOnInit() {
  }

  

}
