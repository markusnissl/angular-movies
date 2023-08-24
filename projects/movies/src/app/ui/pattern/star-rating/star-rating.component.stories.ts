import { componentWrapperDecorator, Meta, StoryObj } from '@storybook/angular';
import { StarRatingComponent } from './star-rating.component';

export default {
  title: 'StarRatingComponent',
  component: StarRatingComponent,
  //tags: ['autodocs'],
  excludeStories: /.*Data$/,
  argTypes: {
    rating: {
      control: {
        type: 'range',
        min: 0,
        max: 10,
      },
    },
  },
  decorators: [
    componentWrapperDecorator(
      (story) => {
        return `<div [style]="(viewMode=='docs')?'color: var(--palette-text-primary); background-color: var(--palette-background-default);':''">${story}</div>`;
      },
      (props) => {
        return {
          viewMode: props.viewMode,
        };
      }
    ),
  ],
  render: (args: StarRatingComponent) => ({
    props: {
      ...args,
    },
  }),
} as Meta<StarRatingComponent>;

type Story = StoryObj<StarRatingComponent>;

export const zeroRatingNoRatingText: Story = {
  args: {
    showRating: false,
    rating: 0,
  },
  parameters: {
    docs: {
      //story: { inline: false }, // render the story in an own iframe
    },
  },
};

export const zeroRatingWithRatingText: Story = {
  args: {
    showRating: true,
    rating: 0,
  },
};

export const fullStarRatingNoRatingText: Story = {
  args: {
    showRating: false,
    rating: 10,
  },
};

export const fullStarRatingWithRatingText: Story = {
  args: {
    showRating: true,
    rating: 10,
  },
};
