import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  
  username = "niranjan";
  employee = {
    name:"niranjan", city: "hyd"
  }
  mylogo="./assets/images/Offer letter.png"
  isDisabled=true
  message = "great day";
  //class binding
  myclass = "header";
  newClass="footer";
  applyClass = true;

  //style binding
  headerColor = "green"
  headerText = "uppercase"
  footerColor = "orange"
  applyStyle = false

  //twoway binding
  studentName = "John"
  showMessage = () => {
     this.message = "Good morning"
  }

  changeMessage = (msg:string) => {
    this.message = msg;
  }
  greetMessage = ""
  greet = (uname:string) => {
    this.greetMessage = "Welcome" + uname;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
