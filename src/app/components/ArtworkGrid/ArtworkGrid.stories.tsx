'use client'
import type { Meta, StoryObj } from '@storybook/react';
import ArtworkGrid from './ArtworkGrid';
import {
	AppRouterContext,
	type AppRouterInstance,
} from 'next/dist/shared/lib/app-router-context.shared-runtime';

const meta: Meta<typeof ArtworkGrid> = {
  component: ArtworkGrid,
  decorators: [
		(Story) => (
			<AppRouterContext.Provider value={{} as AppRouterInstance}>
				<Story />
			</AppRouterContext.Provider>
		),
	],
};

export default meta;

type Story = StoryObj<typeof ArtworkGrid>;

export const Primary: Story = {
  args: {
    artworks: [
      {
        id: '1',
        title: 'Mona Lisa',
        image_id: '',
        thumbnail: {
          lqip: 'https://placehold.co/400',
          width: 400,
          height: 400,
        },
      },
      
      {
        id: '2',
        title: 'Starry Night',
        image_id: '',
        thumbnail: {
          lqip: 'https://placehold.co/400',
          width: 400,
          height: 600,
        },
      },
      {
        id: '3',
        title: 'Girl with a Pearl Earring',
        image_id: '',
        thumbnail: {
          lqip: 'https://placehold.co/400',
          width: 400,
          height: 600,
        },
      },
      {
        id: '4',
        title: 'Gold Marilyn Monroe',
        image_id: '',
        thumbnail: {
          lqip: 'https://placehold.co/400',
          width: 400,
          height: 600,
        },
      },
      {
        id: '5',
        title: 'Coca-Cola',
        image_id: '',
        thumbnail: {
          lqip: 'https://placehold.co/400',
          width: 400,
          height: 600,
        },
      },
      {
        id: '6',
        title: 'Campbells Soup Cans',
        image_id: '',
        thumbnail: {
          lqip: 'https://placehold.co/400',
          width: 400,
          height: 600,
        },
      },
      
    ],
  },
};