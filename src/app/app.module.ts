import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { TempInlineComponent } from './temp-inline/temp-inline.component';
import { StrDirectivesComponent } from './str-directives/str-directives.component';
import { StrDirectComponent } from './str-direct/str-direct.component';
import { AttrDirectComponent } from './attr-direct/attr-direct.component';
import { PipeInbuitComponent } from './pipe-inbuit/pipe-inbuit.component';
import { DesignPipe } from './pipes/design.pipe';
import { PipeCustomComponent } from './pipe-custom/pipe-custom.component';
import { TitlePipe } from './pipes/title.pipe';
import { TimePipe } from './pipes/time.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { BasicHighlightDirective } from './directives/attr/basic-highlight.directive';
import { CustomDirectComponent } from './custom-direct/custom-direct.component';
import { RenderHighlightDirective } from './directives/attr/render-highlight.directive';
import { HostHighlightDirective } from './directives/attr/host-highlight.directive';
import { HostbindHighlightDirective } from './directives/attr/hostbind-highlight.directive';
import { NotifDirective } from './directives/struct/notif.directive';
import { NumberloopDirective } from './directives/struct/numberloop.directive';
import { ViewEncapsuleComponent } from './view-encapsule/view-encapsule.component';
import { ViewEncapsuleChildComponent } from './view-encapsule-child/view-encapsule-child.component';
import { PipeAsyncComponent } from './pipe-async/pipe-async.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ViewParentComponent } from './view-parent/view-parent.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { ViewChildrenComponent } from './view-children/view-children.component';
import { TempFormsComponent } from './temp-forms/temp-forms.component';
import { TempFormsValidComponent } from './temp-forms-valid/temp-forms-valid.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';


@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    TempInlineComponent,
    StrDirectivesComponent,
    StrDirectComponent,
    AttrDirectComponent,
    PipeInbuitComponent,
    DesignPipe,
    PipeCustomComponent,
    TitlePipe,
    TimePipe,
    ReversePipe,
    FilterPipe,
    ParentComponent,
    ChildComponent,
    BasicHighlightDirective,
    CustomDirectComponent,
    RenderHighlightDirective,
    HostHighlightDirective,
    HostbindHighlightDirective,
    NotifDirective,
    NumberloopDirective,
    ViewEncapsuleComponent,
    ViewEncapsuleChildComponent,
    PipeAsyncComponent,
    LifecycleComponent,
    ViewParentComponent,
    ViewChildComponent,
    ViewChildrenComponent,
    TempFormsComponent,
    TempFormsValidComponent,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
