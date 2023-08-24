import { applicationConfig, Meta } from '@storybook/angular';
import { MovieListComponent } from './movie-list.component';
import { Movie } from '../../../state/movie.state';
import {
  provideRouter,
  withDisabledInitialNavigation,
  withInMemoryScrolling,
} from '@angular/router';
import { ROUTES } from '../../../routes';

export default {
  title: 'MovieListComponent',
  component: MovieListComponent,
  decorators: [
    applicationConfig({
      providers: [
        provideRouter(
          ROUTES,
          // withDebugTracing(),
          /**
           * **🚀 Perf Tip for TBT:**
           *
           * Disable initial sync navigation in router config and schedule it in router-outlet container component
           */
          withDisabledInitialNavigation(),
          withInMemoryScrolling({
            /**
             * **💡 UX Tip for InfiniteScroll:**
             *
             * Reset scroll position to top on route change, users could be
             * irritated starting a new list from the bottom of the page.
             *
             * also: otherwise infinite scroll isn't working properly
             */
            scrollPositionRestoration: 'top',
          })
        ),
      ],
    }),
  ],
} as Meta<MovieListComponent>;

const movie1: Movie = {
  adult: false,
  backdrop_path: '/14GEZCzCGhV7FMFaWi4Ec22Kcai.jpg',
  genre_ids: [16, 12, 10751, 14],
  id: 459003,
  original_language: 'uk',
  original_title: 'Мавка: Лісова пісня',
  overview:
    'Mavka — a Soul of the Forest and its Warden — faces an impossible choice between love and her duty as guardian to the Heart of the Forest, when she falls in love with a human — the talented young musician Lukas.',
  popularity: 7767216,
  poster_path: '/eeJjd9JU2Mdj9d7nWRFLWlrcExi.jpg',
  release_date: '2023-03-02',
  title: 'Mavka: The Forest Song',
  video: false,
  vote_average: 7.4,
  vote_count: 281,
  imgSrcset: '154w, 185w, 342w, 500w, 780w',
  imgSizes: '(min-width: 600px) 21vw, 15vw',
  imgSrc: 'https://image.tmdb.org/t/p/w154/eeJjd9JU2Mdj9d7nWRFLWlrcExi.jpg',
  imgWidth: 154,
  imgHeight: 205,
  imgRatio: 1,
};
export const Primary = {
  render: (args: MovieListComponent) => ({
    props: args,
  }),
  args: {
    withImgPriority: 0,
    movies: [movie1],
  },
};
