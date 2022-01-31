import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit{
  
  constructor(private _elementRef:ElementRef) { }
  //elementRef is a wrapper around the native element
  //using this get the native element h2
  ngOnInit(): void {
    this._elementRef.nativeElement.style.color = "green";
    this._elementRef.nativeElement.style.textTransform = "uppercase";
  }

}
