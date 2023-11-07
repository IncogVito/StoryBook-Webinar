// Button.stories.ts

import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { SingleTaskComponent } from './single-task.component';
import { BadgePrimaryComponent } from '../badge-primary/badge-primary.component';

const meta: Meta<SingleTaskComponent> = {
  component: SingleTaskComponent,
  title: 'Task Mgment / Components / Single Task',
  decorators: [
    moduleMetadata({
      declarations: [BadgePrimaryComponent]
    }),
  ],
};

export default meta;
type Story = StoryObj<SingleTaskComponent>;

export const Primary: Story = {
  name: 'Single Task',
  args: {
    title: 'Single Task',
    description: 'Description oui oui',
    deadlineDate: new Date(),
    dateType: 'success',
  },
};
