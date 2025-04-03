import type { Meta, StoryObj } from '@storybook/react';
import ArtworkGrid, { ArtworkGridProps } from './ArtworkGrid';

const meta: Meta<typeof ArtworkGrid> = {
  component: ArtworkGrid,
};

export default meta;
type Story = StoryObj<typeof ArtworkGrid>;

export const Primary: Story = {
  args: {
    artworks: [
      {
        id: '1',
        title: 'Mona Lisa',
        thumbnail: {
          lqip: 'https://placehold.co/400',
          width: 400,
          height: 400,
        },
      },
      {
        id: '2',
        title: 'Starry Night',
        thumbnail: {
          lqip: 'https://placehold.co/400',
          width: 400,
          height: 400,
        },
      },
      {
        id: '3',
        title: 'The Kiss',
        thumbnail: {
          lqip: 'https://placehold.co/400',
          width: 400,
          height: 400,
        },
      },
      {
        id: '4',
        title: 'Girl with a Pearl Earring',
        thumbnail: {
          lqip: 'https://placehold.co/400',
          width: 400,
          height: 400,
        },
      },
      {
        id: '5',
        title: 'American Gothic',
        thumbnail: {
          lqip: 'https://placehold.co/400',
          width: 400,
          height: 400,
        },
      },
      {
        id: '6',
        title: 'The Birth of Venus',
        thumbnail: {
          lqip: 'https://placehold.co/400',
          width: 400,
          height: 400,
        },
      },
    ],
  } satisfies ArtworkGridProps,
};