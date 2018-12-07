import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', loadChildren: './main/main.module#MainModule' },
  { path: 'reminder', loadChildren: './reminder/reminder.module#ReminderModule' },
  { path: 'maps', loadChildren: './maps/maps.module#MapsModule' },
  { path: 'graph', loadChildren: './graph/graph.module#GraphModule' },
  { path: 'not-found', loadChildren: './not-found/not-found.module'},
  { path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
