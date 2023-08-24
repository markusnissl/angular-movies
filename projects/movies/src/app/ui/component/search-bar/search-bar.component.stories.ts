//https://github.com/storybookjs/storybook/issues/23787
import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular';
import { SearchBarComponent } from './search-bar.component';
import { RxActionFactory } from '@rx-angular/state/actions';
import { provideFastSVG } from '@push-based/ngx-fast-svg';
import { action } from '@storybook/addon-actions';
import { fireEvent, userEvent, within } from '@storybook/testing-library';
import { expect, jest } from '@storybook/jest';

export const actionsData = {
  //searchSubmit: action('searchSubmit'), // This does not allow testing
  searchSubmit: jest.fn(action('searchSubmit')),
};

export default {
  title: 'SearchBarComponent',
  component: SearchBarComponent,
  excludeStories: /.*Data$/,
  //tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [],
      declarations: [],
      providers: [RxActionFactory],
    }),
    applicationConfig({
      providers: [
        provideFastSVG({
          url: (name: string) => `assets/svg-icons/${name}.svg`,
        }),
      ],
    }),
  ],
  render: (args: SearchBarComponent) => ({
    props: {
      ...args,
      ...actionsData,
    },
  }),
} as Meta<SearchBarComponent>;

type Story = StoryObj<SearchBarComponent>;

export const Default: Story = {
  args: {
    query: '',
  },
};

export const WithText: Story = {
  args: {
    query: 'demo search text',
  },
};

export const WithInteractions: Story = {
  args: {
    query: '',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const searchInput = (await canvas.findByPlaceholderText(
      'Search for a movie...'
    )) as HTMLInputElement;

    const formElement = canvas.getByTestId('q-form');
    // eslint-disable-next-line @rx-angular/prefer-no-layout-sensitive-apis
    await fireEvent.focus(formElement);

    await userEvent.type(searchInput, 'changed input text');

    await userEvent.click(canvas.getByRole('button'));
    await expect(actionsData.searchSubmit).toHaveBeenCalled();
  },
};
