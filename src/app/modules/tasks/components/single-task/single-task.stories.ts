
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { SingleTaskComponent } from './single-task.component';
import { BadgeComponent } from 'src/app/modules/shared/components/badge/badge.component';

const meta: Meta<SingleTaskComponent> = {
  component: SingleTaskComponent,
  title: 'Tasks Module / Components / Single Task',
  decorators: [
    moduleMetadata({
      declarations: [BadgeComponent]
    }),
  ],
};

export default meta;
type Story = StoryObj<SingleTaskComponent>;


export const Primary: Story = {
  name: 'Task primary',
  args: {
    title: 'Task',
    content: 'Super ciężki task',
    badgeText: 'Task',
    badgeType: 'warning'
  },
};


export const LongText: Story = {
  name: 'Long text',
  args: {
    title: 'Task',
    content: 'Lorem ipsumn, bla lorem, Lorem ipsumn, bla loremLorem ipsumn, bla loremLorem ipsumn, bla loremLorem ipsumn, bla loremLorem ipsumn, bla lorem, Lorem ipsumn, bla loremLorem ipsumn, bla loremLorem ipsumn, bla lorem',
    badgeText: 'Task',
    badgeType: 'warning'
  },
};
