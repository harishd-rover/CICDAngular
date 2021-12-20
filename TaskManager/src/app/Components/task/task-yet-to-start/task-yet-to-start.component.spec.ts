import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskYetToStartComponent } from './task-yet-to-start.component';

describe('TaskYetToStartComponent', () => {
  let component: TaskYetToStartComponent;
  let fixture: ComponentFixture<TaskYetToStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskYetToStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskYetToStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
