import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragBoxLabelComponent } from './drag-box-label.component';

describe('DragBoxLabelComponent', () => {
  let component: DragBoxLabelComponent;
  let fixture: ComponentFixture<DragBoxLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragBoxLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragBoxLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
