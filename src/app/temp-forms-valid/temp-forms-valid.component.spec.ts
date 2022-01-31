import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempFormsValidComponent } from './temp-forms-valid.component';

describe('TempFormsValidComponent', () => {
  let component: TempFormsValidComponent;
  let fixture: ComponentFixture<TempFormsValidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempFormsValidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempFormsValidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
