import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  
  @Input() message = ''
  username="";
  constructor() { 
    console.log("constructor - lifecycle")
   }
  ngAfterViewInit(): void {
    console.log(`inside life - view initialized ${this.username}`)
  }
  ngAfterViewChecked(): void {
    console.log(`inside life - view checked ${this.username}`)
  }
  ngAfterContentInit(): void {
    console.log(`inside life - content initialized ${this.username}`)
  }
  ngAfterContentChecked(): void {
    console.log(`inside life - content checked ${this.username}`)
  }
  ngDoCheck(): void {
    console.log(`inside life - docheck ${this.message}`)
    console.log(`inside life - docheck ${this.username}`)
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(`inside onChange ${this.message}`)
  }

  ngOnInit(): void {
    console.log(`inside ngOnInit ${this.message}`)
  }

}
