import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReminderComponent } from './reminder.component';
import { ReminderRoutingModule } from './reminder-routing.module';
import { RecallerComponent } from './recaller/recaller.component';
import { TodoComponent } from './todo/todo.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ReminderComponent, RecallerComponent, TodoComponent],
  imports: [
    CommonModule,
    ReminderRoutingModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class ReminderModule { }
