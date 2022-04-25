import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicalModelingComponent } from './graphical-modeling.component';

describe('GraphicalModelingComponent', () => {
  let component: GraphicalModelingComponent;
  let fixture: ComponentFixture<GraphicalModelingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicalModelingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicalModelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
