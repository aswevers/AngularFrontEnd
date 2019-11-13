import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendRequestsComponent } from './friend-requests/friend-requests.component';
import { FriendPageComponent } from './friend-page/friend-page.component';
import { NavigationModule } from '../navigation/navigation.module';
import { SharedModule } from '../shared/shared.module';
import { NewFriendComponent } from './new-friend/new-friend.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FriendListComponent } from './friend-list/friend-list.component';



@NgModule({
  declarations: [FriendRequestsComponent, FriendPageComponent, NewFriendComponent, FriendListComponent],
  imports: [
    CommonModule,
    NavigationModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class VriendModule { }
