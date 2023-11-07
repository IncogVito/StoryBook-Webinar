// Button.stories.ts

import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { TaskPageComponent } from './task-page.component';
import { TaskColumnComponent } from '../../components/task-column/task-column.component';
import { BadgePrimaryComponent } from '../../components/badge-primary/badge-primary.component';
import { SingleTaskComponent } from '../../components/single-task/single-task.component';
import { TaskModel } from '../../models/task.model';

const meta: Meta<TaskPageComponent> = {
  component: TaskPageComponent,
  title: 'Task Mgment / Pages / Task page',
  decorators: [
    moduleMetadata({
      declarations: [
        BadgePrimaryComponent,
        SingleTaskComponent,
        TaskColumnComponent
      ]
    }),
  ],
};

const taskList: TaskModel[] = [
  {
    name: 'Initial Task',
    description: 'Lorem ipsum',
    deadlineDate: new Date(),
    displayWarn: false,
  },
  {
    name: 'Second task',
    description: 'Lorem ipsum',
    deadlineDate: new Date(),
    displayWarn: false,
  }
];


export default meta;
type Story = StoryObj<TaskPageComponent>;

export const FullTasksPage: Story = {
  name: 'Full Tasks page',
  args: {
    awaitingTasks: [...taskList],
    inProgressTasks: [...taskList],
    tasksDone: [...taskList]
  },
};

export const OneEmptyColumn: Story = {
  name: 'One empty column',
  args: {
    awaitingTasks: [],
    inProgressTasks: [...taskList],
    tasksDone: [...taskList]
  },
};
