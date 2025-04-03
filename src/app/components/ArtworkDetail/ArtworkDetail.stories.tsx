import type { Meta, StoryObj } from '@storybook/react';
import ArtworkDetail, { ArtworkDetailProps } from './ArtworkDetail';

const meta: Meta<typeof ArtworkDetail> = {
  component: ArtworkDetail,
  title: 'Components/ArtworkDetail',
};

export default meta;
type Story = StoryObj<typeof ArtworkDetail>;

const mockArtwork: ArtworkDetailProps = {
  id: 123,
  title: 'Starry Night',
  artist_display: 'Vincent van Gogh\nDutch, 1853–1890',
  date_display: '1889',
  image_id: 'd8c27a5a-c294-dc1d-60bb-4a3d7c4a6b5b',
  place_of_origin: 'Netherlands',
  medium_display: 'Oil on canvas',
  dimensions: '73.7 x 92.1 cm',
  credit_line: 'Museum Collection, Gift of a Cool Donor',
  thumbnail: {
    alt_text: 'A swirling night sky above a quiet town.',
  },
};

export const Primary: Story = {
  args: {
    ...mockArtwork,
  },
};

export const MissingImage: Story = {
  args: {
    ...mockArtwork,
    image_id: null,
    title: 'Untitled (No Image Available)',
  },
};