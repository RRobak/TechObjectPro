import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragBoxComponent } from './drag-box.component';

describe('DragBoxComponent', () => {
  let component: DragBoxComponent;
  let fixture: ComponentFixture<DragBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
