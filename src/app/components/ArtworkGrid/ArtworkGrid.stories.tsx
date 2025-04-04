import type { Meta, StoryObj } from '@storybook/react';
import ArtworkGrid from './ArtworkGrid';
import { MockNextRouter } from '../../../../.storybook/mockRouter';

const meta: Meta<typeof ArtworkGrid> = {
  component: ArtworkGrid,
  decorators: [
    (Story) => (
      <MockNextRouter
        mockRouter={{
          push: (url: string) => {
            console.log('Mock push to', url);
            return Promise.resolve(true);
          },
        }}
      >
        <Story />
      </MockNextRouter>
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
        image_id: 'abc123',
        thumbnail: {
          lqip: 'https://placehold.co/400',
          width: 400,
          height: 400,
        },
      },
    ],
  },
};