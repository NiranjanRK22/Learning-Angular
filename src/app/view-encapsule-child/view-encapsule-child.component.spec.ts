import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEncapsuleChildComponent } from './view-encapsule-child.component';

describe('ViewEncapsuleChildComponent', () => {
  let component: ViewEncapsuleChildComponent;
  let fixture: ComponentFixture<ViewEncapsuleChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEncapsuleChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEncapsuleChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
