import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked{
  title = 'Welcome to angular';
  constructor() { 
    console.log("constructor")
   }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(`inside onChange`)
  }

  ngOnInit(): void {
    console.log(`inside ngOnInit `)
  }
  ngAfterContentInit(): void {
    console.log(`inside - content initialized `)
  }
  ngAfterContentChecked(): void {
    console.log(`inside - content checked `)
  }
  ngAfterViewInit(): void {
    console.log(`inside app - view initialized`)
  }
  ngAfterViewChecked(): void {
    console.log(`inside app - view checked`)
  }
}
