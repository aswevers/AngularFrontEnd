import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GebruikerLogin } from '../models/gebruiker-login.model';
import { AuthenticaService } from '../authentica.service';
import { Router } from '@angular/router';
import { Gebruiker } from '../models/gebruiker.model';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private fb:FormBuilder, private _authenticateService:AuthenticaService, private router:Router) { }
  passwordForm = this.fb.group({
    password: ['', [Validators.required],],
    conpassword : ['', Validators.required]
  })

  gebruiker: Gebruiker = new Gebruiker(parseInt(localStorage.getItem("id")),localStorage.getItem("user"), "");
  ngOnInit() {
  }
  pass:String ;
  cpass:String ;
  
  setPW(event){
    this.pass =  event.target.value;
  }
  
  setCP(event){
    this.cpass =  event.target.value;
  }
  
  checkPasswords(){
    if(this.pass == this.cpass){
      return true;
    }else{
      false
    }
  }

  onSubmit() {
    this._authenticateService.changePassword(parseInt(localStorage.getItem("id")), this.gebruiker).subscribe(result => {
      this.router.navigate(['/login']);
    });
  }
  
}
