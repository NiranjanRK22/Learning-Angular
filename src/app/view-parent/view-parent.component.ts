import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ViewChildComponent } from '../view-child/view-child.component';
import { ViewChildrenComponent } from '../view-children/view-children.component';

@Component({
  selector: 'app-view-parent',
  templateUrl: './view-parent.component.html',
  styleUrls: ['./view-parent.component.css']
})
export class ViewParentComponent implements OnInit, AfterViewInit{
  parentMessage = 'from parent';
  child = ''
  childArray!: ViewChildrenComponent[];
  // To get the reference of the child component
  @ViewChild(ViewChildComponent)childRef!: ViewChildComponent

  @ViewChild("header") headerRef!: ElementRef

  @ViewChild("div") divRef!: ElementRef

  // To get refernce of multiple child components 
  @ViewChildren(ViewChildrenComponent) childrenRef!: QueryList<ViewChildrenComponent>
  constructor() { }
  ngAfterViewInit(): void {
    console.log("my own message "+this.childRef.childMessage);
    this.headerRef.nativeElement.style.color = "blue";
    this.divRef.nativeElement.style.backgroundColor = "pink";
    this.child = this.childRef.childMessage;

    console.log(this.childrenRef.toArray());
    this.childrenRef.toArray().forEach(ref => {
      console.log('All children')
      console.log(ref.child1);
      console.log(ref.child2);
      console.log(ref.parMessage);
    })

    this.childArray = this.childrenRef.toArray();
  }
  
  ngOnInit(): void {
    
  }

}
