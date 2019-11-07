import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityComponent } from './security/security.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SecurityComponent, RegisterComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    SecurityComponent
  ]
})
export class SecurityModule { }
