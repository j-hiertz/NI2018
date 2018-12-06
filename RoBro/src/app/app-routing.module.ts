import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'reminder', loadChildren: './reminder/reminder.module#ReminderModule' },
  { path: 'graph', loadChildren: './graph/graph.module#GraphModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
