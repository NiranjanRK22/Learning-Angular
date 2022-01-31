import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-direct',
  templateUrl: './custom-direct.component.html',
  styleUrls: ['./custom-direct.component.css']
})
export class CustomDirectComponent implements OnInit {
  highColor = 'orange';
  username="niranjan"
  constructor() { }

  ngOnInit(): void {
   
  }

}
