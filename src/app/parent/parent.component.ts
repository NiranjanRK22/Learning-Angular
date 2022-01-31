import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  
  parentMessage = 'First Message from parent';
  parentMessTwo = "Second message from parent";
  fchild=""
  schild=""

  constructor() { }

  ngOnInit(): void {
  }

}
