import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskByTitleComponent } from './task-by-title.component';

describe('TaskByTitleComponent', () => {
  let component: TaskByTitleComponent;
  let fixture: ComponentFixture<TaskByTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskByTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskByTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
