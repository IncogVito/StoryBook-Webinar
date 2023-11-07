import { ButtonComponent } from './button.component';
import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'Design System/ Atoms / Button',
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Basic: Story = {
  name: 'Basic',
  args: {
    text: 'Basic input',
    type: 'primary'
  },
  argTypes: {
    type: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' }
    }
  }
};

export const Secondary: Story = {
  name: 'Secondary',
  args: {
    text: 'Button Secondary',
    type: 'secondary'
  },
};
