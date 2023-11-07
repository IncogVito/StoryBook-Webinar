import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgePrimaryComponent } from './components/badge-primary/badge-primary.component';
import { InputPrimaryComponent } from './components/input-primary/input-primary.component';
import { SingleTaskComponent } from './components/single-task/single-task.component';
import { TaskColumnComponent } from './components/task-column/task-column.component';
import { TaskPageComponent } from './pages/task-page/task-page.component';



@NgModule({
  declarations: [
    BadgePrimaryComponent,
    InputPrimaryComponent,
    SingleTaskComponent,
    TaskColumnComponent,
    TaskPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TodosModule { }
