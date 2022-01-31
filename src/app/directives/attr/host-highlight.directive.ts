import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostHighlight]'
})
export class HostHighlightDirective implements OnInit{

  constructor(private _elementRef: ElementRef,private _renderer:Renderer2) { }
  ngOnInit(): void {
    this._renderer.setStyle(this._elementRef.nativeElement, 'backgroundColor', 'red');
    this._renderer.setStyle(this._elementRef.nativeElement, 'color', 'white');
  }
  @HostListener("mouseenter")
  mouseEnter(event: Event)  {
    this._renderer.setStyle(this._elementRef.nativeElement, 'backgroundColor', 'pink');
    this._renderer.setStyle(this._elementRef.nativeElement, 'color', 'black');
    this._renderer.addClass(this._elementRef.nativeElement, 'myclass');
  }
  
  @HostListener("mouseleave")
  mouseExit(event:Event) {
    console.log("mouse exit happened");
    this._renderer.setStyle(this._elementRef.nativeElement, 'backgroundColor', 'red');
    this._renderer.setStyle(this._elementRef.nativeElement, 'color', 'white');
    this._renderer.removeClass(this._elementRef.nativeElement, 'myclass');
  }
}
