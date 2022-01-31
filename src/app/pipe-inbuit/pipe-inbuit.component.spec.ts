import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeInbuitComponent } from './pipe-inbuit.component';

describe('PipeInbuitComponent', () => {
  let component: PipeInbuitComponent;
  let fixture: ComponentFixture<PipeInbuitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeInbuitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeInbuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
