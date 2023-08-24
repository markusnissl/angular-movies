import { Meta, StoryObj } from '@storybook/angular';
import { DarkModeToggleComponent } from './dark-mode-toggle.component';
import { of } from 'rxjs';

export default {
  title: 'DarkModeToggleComponent',
  component: DarkModeToggleComponent,
  //tags: ['autodocs'],
  excludeStories: /.*Data$/,
  render: (args: DarkModeToggleComponent) => ({
    props: {
      ...args,
    },
  }),
} as Meta<DarkModeToggleComponent>;

type Story = StoryObj<DarkModeToggleComponent>;

export const Light: Story = {
  args: {
    isLightTheme$: of(true),
  },
};

export const Dark: Story = {
  args: {
    isLightTheme$: of(false),
  },
};
