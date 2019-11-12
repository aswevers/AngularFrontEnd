import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendRequestsComponent } from './friend-requests/friend-requests.component';
import { FriendPageComponent } from './friend-page/friend-page.component';
import { NavigationModule } from '../navigation/navigation.module';
import { SharedModule } from '../shared/shared.module';
import { NewFriendComponent } from './new-friend/new-friend.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FriendRequestsComponent, FriendPageComponent, NewFriendComponent],
  imports: [
    CommonModule,
    NavigationModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class VriendModule { }
