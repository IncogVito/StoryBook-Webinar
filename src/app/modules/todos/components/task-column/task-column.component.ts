import { Component, Input } from '@angular/core';
import { TaskModel } from '../../models/task.model';

@Component({
  selector: 'app-task-column',
  templateUrl: './task-column.component.html',
  styleUrls: ['./task-column.component.scss']
})
export class TaskColumnComponent {

  @Input()
  public columnTitle: string = '';

  @Input()
  public taskList: TaskModel[] = [];

  @Input()
  public borderColor: string = '';

}
