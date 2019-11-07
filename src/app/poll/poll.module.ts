import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPollComponent } from './new-poll/new-poll.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NavigationModule } from '../navigation/navigation.module';
import { HttpClientModule } from '@angular/common/http';
import { MypollComponent } from './mypoll/mypoll.component';
import { PollComponent } from './poll/poll.component';



@NgModule({
  declarations: [NewPollComponent, MypollComponent, PollComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    NavigationModule,
    HttpClientModule
  ],
  exports:[
    NewPollComponent, MypollComponent, PollComponent
  ]
})
export class PollModule { }
