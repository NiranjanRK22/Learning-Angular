import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostbindHighlight]'
})
export class HostbindHighlightDirective implements OnInit{
  @Input()defaultColor=''
  @Input()bgcolor=''
  @Input()highlightColor=''
  @Input()textStyle=''
  
  // values are taken from @Input and assigned to @HostBinding
  @HostBinding('style.color')basicColor = '';
  @HostBinding('style.backgroundColor')bgColor = '';
  @HostBinding('style.backgroundColor')changeText = '';

  constructor(private _elementRef:ElementRef, private _renderer: Renderer2) { }
  ngOnInit(): void {
    // this._renderer.setStyle(this._elementRef.nativeElement, 'backgroundColor', 'red');
    // this._renderer.setStyle(this._elementRef.nativeElement, 'color', 'white');
    this.basicColor = this.defaultColor;
    this.changeText = this.textStyle;
    this.bgColor = this.bgColor;

  }

  @HostListener("mouseenter")
  mouseEnter(event: Event)  {
   this.basicColor = this.highlightColor;
   this.changeText = 'lowercase';
   this.bgColor = this.defaultColor;

  }
  
  @HostListener("mouseleave")
  mouseExit(event:Event) {
   this.basicColor = this.defaultColor;
   this.changeText = this.textStyle;
   this.bgColor = this.highlightColor;
    
  }

}
