import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'reminder', loadChildren: './reminder/reminder.module#ReminderModule' },
  { path: 'maps', loadChildren: './maps/maps.module#MapsModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
