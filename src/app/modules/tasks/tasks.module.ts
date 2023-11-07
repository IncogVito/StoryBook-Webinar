import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleTaskComponent } from './components/single-task/single-task.component';
import { SharedModule } from '../shared/shared.module';
import { TasksColumnComponent } from './components/tasks-column/tasks-column.component';



@NgModule({
  declarations: [
    SingleTaskComponent,
    TasksColumnComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class TasksModule { }
