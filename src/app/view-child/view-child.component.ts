import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {
  @Input() pmessage = "";
  childMessage = "From child";
  constructor() { }

  ngOnInit(): void {
  }

}
