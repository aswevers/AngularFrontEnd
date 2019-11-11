import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendRequestsComponent } from './friend-requests/friend-requests.component';
import { FriendPageComponent } from './friend-page/friend-page.component';
import { NavigationModule } from '../navigation/navigation.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [FriendRequestsComponent, FriendPageComponent],
  imports: [
    CommonModule,
    NavigationModule,
    SharedModule
  ]
})
export class VriendModule { }
