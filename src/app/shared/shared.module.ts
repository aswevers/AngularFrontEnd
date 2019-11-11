import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule, MatInputModule, MatButtonModule, MatMenuModule, MatToolbarModule, MatProgressBar, MatProgressBarModule, MatBadgeModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatSidenavModule, MatListModule } from '@angular/material';
import { NavigationModule } from '../navigation/navigation.module';



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
    MatToolbarModule,
    MatProgressBarModule,
    MatIconModule,
    FontAwesomeModule,
    MatBadgeModule
  ],
  exports:[
    CommonModule,
    MatFormFieldModule,
    MatInputModule, 
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
    MatProgressBar,
    MatIconModule,
    FontAwesomeModule,
    MatBadgeModule
  ]
})
export class SharedModule { }
