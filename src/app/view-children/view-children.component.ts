import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-children',
  templateUrl: './view-children.component.html',
  styleUrls: ['./view-children.component.css']
})
export class ViewChildrenComponent implements OnInit {
  @Input() parMessage = '';
  child1 = "First child";
  child2 = "Second child";
  constructor() { }

  ngOnInit(): void {
  }

}
