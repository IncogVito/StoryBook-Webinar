import { Component, Input } from '@angular/core';
import { TaskModel } from '../../models/task.model';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.scss']
})
export class TaskPageComponent {

  @Input()
  public awaitingTasks: TaskModel[] = [];

  @Input()
  public inProgressTasks: TaskModel[] = [];

  @Input()
  public tasksDone: TaskModel[] = [];

}
