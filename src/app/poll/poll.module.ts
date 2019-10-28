import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPollComponent } from './new-poll/new-poll.component';



@NgModule({
  declarations: [NewPollComponent],
  imports: [
    CommonModule
  ]
})
export class PollModule { }
