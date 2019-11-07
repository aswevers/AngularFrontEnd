import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule, MatInputModule, MatButtonModule, MatMenuModule, MatToolbarModule } from '@angular/material';

import { MatSidenavModule, MatListModule } from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule, 
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule
  ],
  exports:[
    CommonModule,
    MatFormFieldModule,
    MatInputModule, 
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule
  ]
})
export class SharedModule { }
