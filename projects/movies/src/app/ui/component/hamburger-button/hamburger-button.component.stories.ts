import { Meta, StoryObj } from '@storybook/angular';
import { HamburgerButtonComponent } from './hamburger-button.component';

const meta: Meta<HamburgerButtonComponent> = {
  title: 'Hamburger Button',
  component: HamburgerButtonComponent,
  tags: ['autodocs'],
  render: (args: HamburgerButtonComponent) => ({
    props: {
      ...args,
    },
  }),
};
export default meta;

type Story = StoryObj<typeof HamburgerButtonComponent>;

export const Default: Story = {
  args: {},
  parameters: {
    design: {
      type: 'figma',
      //url: 'https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample',
      url: 'https://www.figma.com/file/7R6EdcsbxBzaGd7Fucx0PJ/MovieAppExample?type=design&node-id=28%3A5&mode=design&t=CN1pzWRYsh0at6cz-1',
      allowFullscreen: true,
    },
  },
};
