import { Component, OnInit, Input } from '@angular/core';
import { RegisterService } from '../register.service';
import { GebruikerLogin } from '../models/gebruiker-login.model';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {Router} from "@angular/router"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  registerForm = this.fb.group({
    password: ['', [Validators.required],],
    email: ['', Validators.required],
    conpassword : ['', Validators.required]
  })

  gebruikerLogin: GebruikerLogin = new GebruikerLogin("", "");

  constructor(private _authenticateService : RegisterService, private fb: FormBuilder, private router:Router) { }

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
    this._authenticateService.register(this.gebruikerLogin).subscribe(result => {
      console.log(this.gebruikerLogin);
      this.router.navigate(['/login']);
    });
  }
  

  ngOnInit() {
  }

  
}
