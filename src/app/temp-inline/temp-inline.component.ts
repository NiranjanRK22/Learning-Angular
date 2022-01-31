import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-inline',
  template:`
  <html>
  <body>
  <h2 [class] = "myclass">{{message}}</h2>
  <h2 [class] = "applyclass?myclass:newclass">{{message}}</h2>
  <h2 [class.header-style] = "!applyclass">{{message}}</h2>
  <h2 [style.color] = "!applyclass?'blue':'red'">{{message}}</h2>
  </body>
  </html>
  `,
  styles: [
     `
      .header-style {
        color: green;
        text-transform: uppercase;
      }
      .footer-style {
        color: orange;
        letter-spacing: 2px;
      }
     `
  ],
  // styleUrls:['./temp-inline.component.css']
})
export class TempInlineComponent implements OnInit {

  message = "Have a great day!";
  myclass="header-style";
  newclass = "footer-style"
  applyclass = false

  constructor() { }

  ngOnInit(): void {
  }

}
