import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReminderComponent } from './reminder.component';

const routes: Routes = [
  { path: '', component: ReminderComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReminderRoutingModule { }
