import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { TaskColumnComponent } from './task-column.component';
import { BadgePrimaryComponent } from '../badge-primary/badge-primary.component';
import { SingleTaskComponent } from '../single-task/single-task.component';
import { TaskModel } from '../../models/task.model';

const meta: Meta<TaskColumnComponent> = {
  component: TaskColumnComponent,
  title: 'Task Mgment / Components / Task Column',
  decorators: [
    moduleMetadata({
      declarations: [BadgePrimaryComponent, SingleTaskComponent],
    }),
  ],
};

export default meta;
type Story = StoryObj<TaskColumnComponent>;

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

export const Primary: Story = {
  name: 'Simple column',
  args: {
    columnTitle: 'Todo column',
    taskList: [...taskList],
    borderColor: 'red'
  },
};
