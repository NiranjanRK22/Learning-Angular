import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  
  @Input() parentOne = "";
  @Input() parentTwo = "";
  @Input() parentThree ="";
  @Output() childEventOne = new EventEmitter<string>();
  @Output() childEventTwo = new EventEmitter<string>();

  showMessage = () => {
    this.childEventOne.emit("Have a great day");
  }
  
  greetChild = (childname: string) => {
  this.childEventTwo.emit(`Welcome ${childname}`);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
