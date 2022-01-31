import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRenderHighlight]'
})
export class RenderHighlightDirective implements OnInit{

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) { }
  ngOnInit(): void {
    this._renderer.setStyle(this._elementRef.nativeElement, 'color', 'purple');
    this._renderer.setStyle(this._elementRef.nativeElement, 'fontSize', '50px');
    this._renderer.addClass(this._elementRef.nativeElement,'myclass');
  }

}
