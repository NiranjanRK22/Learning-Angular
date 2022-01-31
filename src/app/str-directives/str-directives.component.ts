import { Component, OnInit } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';


@Component({
  selector: 'app-str-directives',
  templateUrl: './str-directives.component.html',
  styleUrls: ['./str-directives.component.css'],
})
export class StrDirectivesComponent implements OnInit {
  username = 'niranjan';
  empname = 'john';
  listStyle='square';
  listcolor = 'red';
  fruits=['apple', 'strawberry', 'grapes', 'kiwi', 'blueberry', 'raspberry', 'pineapple', 'muskmelon'];
 
  constructor() {}

  ngOnInit(): void {}
}
