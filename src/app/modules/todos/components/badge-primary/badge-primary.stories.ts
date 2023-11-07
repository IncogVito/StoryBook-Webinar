// Button.stories.ts

import type { Meta, StoryObj } from '@storybook/angular';

import { BadgePrimaryComponent } from './badge-primary.component';

const meta: Meta<BadgePrimaryComponent> = {
  component: BadgePrimaryComponent,
  title: 'Design System/ Atoms / Badge'
};

export default meta;
type Story = StoryObj<BadgePrimaryComponent>;

export const Primary: Story = {
  name: 'Badge primary',
  args: {
    label: 'Badge Primary',
    type: 'success'
  },
  argTypes: {
    type: {
      options: ['success', 'warn', 'error'],
      control: { type: 'radio' }
    },
    label: { control: 'multi-select', options: ['USA', 'Canada', 'Mexico'] }
  }
};

export const Secondary: Story = {
  ...Primary,
  name: 'Badge secondary',
  args: {
    label: 'Check',
    type: 'error'
  },
  argTypes: {
    type: {
      options: ['success', 'warn', 'error'],
      control: { type: 'radio' }
    },
    label: { control: 'multi-select', options: ['USA', 'Canada', 'Mexico'] }
  }
};
