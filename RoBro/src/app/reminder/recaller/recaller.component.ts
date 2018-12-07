import { Component, OnInit } from '@angular/core';
import { RecallerService } from './recaller.service';
import { Recall } from './recall.model';

@Component({
  selector: 'app-recaller',
  templateUrl: './recaller.component.html',
  styleUrls: ['./recaller.component.css']
})
export class RecallerComponent implements OnInit {
  public recalls: Recall[] = [];

  constructor(private recallerService: RecallerService) { }

  ngOnInit() {
    this.recallerService.getRecalls().subscribe(response => {
      this.recalls = response;
    });
  }
}
