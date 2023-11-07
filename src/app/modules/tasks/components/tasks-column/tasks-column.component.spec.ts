import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksColumnComponent } from './tasks-column.component';

describe('TasksColumnComponent', () => {
  let component: TasksColumnComponent;
  let fixture: ComponentFixture<TasksColumnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TasksColumnComponent]
    });
    fixture = TestBed.createComponent(TasksColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
