import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NavigationModule } from '../navigation/navigation.module';
import { NavigationComponent } from '../navigation/navigation/navigation.component';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';



@NgModule({
  declarations: [DashboardComponent, DashboardCardComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    NavigationModule
  ]
})
export class DashboardModule { 
  
}
