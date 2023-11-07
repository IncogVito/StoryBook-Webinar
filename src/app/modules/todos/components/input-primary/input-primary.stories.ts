// Button.stories.ts

import type { Meta, StoryObj } from '@storybook/angular';
import { InputPrimaryComponent } from './input-primary.component';

import { userEvent, within } from '@storybook/testing-library';

const meta: Meta<InputPrimaryComponent> = {
  component: InputPrimaryComponent,
  title: 'Design System/ Atoms / Input'
};

export default meta;
type Story = StoryObj<InputPrimaryComponent>;

export const Basic: Story = {
  name: 'Basic',
  args: {
    label: 'Basic input',
    disabled: false
  }
};
export const LongLabel: Story = {
  name: 'Long Label',
  args: {
    label: 'Its a long label which is unlikely to happen',
    disabled: false
  }
};

export const Disabled: Story = {
  name: 'Disabled',
  args: {
    label: 'Disabled input',
    disabled: true
  }
};

export const PlayedFunction: Story = {
  name: 'Filling input',
  args: {
    label: 'Filling input',
    disabled: false
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const input = canvas.getByLabelText('Filling input', {
      selector: 'input',
    });

    await userEvent.type(input, 'example-email@email.com', {
      delay: 100,
    });
  }
};
