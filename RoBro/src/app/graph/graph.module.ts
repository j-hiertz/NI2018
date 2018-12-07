import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphComponent } from './graph.component';
import { GraphRoutingModule } from './graph-routing.module';
import { MatCardModule } from '@angular/material';


@NgModule({
  declarations: [GraphComponent],
  imports: [
  CommonModule,
  GraphRoutingModule,
  MatCardModule
]
})
export class GraphModule { }
