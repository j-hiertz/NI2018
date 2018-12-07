import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsComponent } from './maps.component';
import { MapsRoutingModule } from './maps-routing.module';
import { MatCardModule } from '@angular/material';


@NgModule({
  declarations: [MapsComponent],
  imports: [
    CommonModule,
    MapsRoutingModule,
    MatCardModule
  ]
})
export class MapsModule { }
