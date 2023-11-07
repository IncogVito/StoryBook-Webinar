// Button.stories.ts

import type { Meta, StoryObj } from '@storybook/angular';
import { BadgeComponent } from './badge.component';

const meta: Meta<BadgeComponent> = {
  component: BadgeComponent,
  title: 'System Design / Atoms components / Badge',
};

export default meta;
type Story = StoryObj<BadgeComponent>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/angular/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    text: 'Badge',
  },
  argTypes: {
    type: {
      options: ['success', 'warning'],
      control: { type: 'radio' },
    },
  },
};

export const LongText: Story = {
  name: 'Long text story',
 args: {
   text: 'Super long text badge Super long text badge',
 },
 argTypes: {
   type: {
     options: ['success', 'warning'],
     control: { type: 'radio' },
   },
 },
};
