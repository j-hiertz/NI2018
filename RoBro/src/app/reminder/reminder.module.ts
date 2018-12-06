import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReminderComponent } from './reminder.component';
import { ReminderRoutingModule } from './reminder-routing.module';
import { RecallerComponent } from './recaller/recaller.component';
import { TodoComponent } from './todo/todo.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [ReminderComponent, RecallerComponent, TodoComponent],
  imports: [
    CommonModule,
    ReminderRoutingModule,
    MatListModule
  ]
})
export class ReminderModule { }
