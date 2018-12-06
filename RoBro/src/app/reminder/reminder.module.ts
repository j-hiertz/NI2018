import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReminderComponent } from './reminder.component';
import { ReminderRoutingModule } from './reminder-routing.module';

@NgModule({
  declarations: [ReminderComponent],
  imports: [
    CommonModule,
    ReminderRoutingModule
  ]
})
export class ReminderModule { }
