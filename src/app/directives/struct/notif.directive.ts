import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNotif]'
})
export class NotifDirective {
  @Input() set appNotif(condition:boolean){
    if(!condition)
      this._viewContainer.createEmbeddedView(this._template);
    else
      this._viewContainer.clear();
  }
  //A view container can have many views
   // Embedded views can be created and added to a container
  // Templates can be added inside the views using templateRef
  // Represents a container where one or more views can be attached to a component.
  constructor(private _viewContainer:ViewContainerRef, private _template:TemplateRef<any>) { }

}
