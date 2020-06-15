import { Component, OnInit } from '@angular/core';
import{ Input } from '@angular/core';
@Component({
  selector: 'app-produckt-alerts',
  templateUrl: './produckt-alerts.component.html',
  styleUrls: ['./produckt-alerts.component.css']
})
export class ProducktAlertsComponent implements OnInit {
@Input() product;
  constructor() { }

  ngOnInit() {
  }

}