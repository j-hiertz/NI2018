import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  private energy = 30;
  private food = 20;
  private water = 60;

  constructor() { }

  ngOnInit() {
  }

}
