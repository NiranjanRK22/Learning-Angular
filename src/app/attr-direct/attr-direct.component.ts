import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attr-direct',
  templateUrl: './attr-direct.component.html',
  styleUrls: ['./attr-direct.component.css']
})
export class AttrDirectComponent implements OnInit {
  username = 'niranjan';
  city = 'hyd';
  fruits=['apple', 'strawberry', 'grapes', 'kiwi', 'blueberry', 'raspberry', 'pineapple', 'muskmelon'];
  constructor() { }

  ngOnInit(): void {
  }

}
