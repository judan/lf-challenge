import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ArtworkGrid from './ArtworkGrid';
import { minArtworkData } from '@/app/page';
import { describe, it, expect } from 'vitest';

const mockArtworks: minArtworkData[] = [
  {
    id: '1',
    title: 'Mona Lisa',
    image_id: '5',
    thumbnail: {
      lqip: 'https://placehold.co/400',
      width: 400,
      height: 600,
    },
  },
  {
    id: '2',
    title: 'Starry Night',
    image_id: '5',
    thumbnail: {
      lqip: 'https://placehold.co/400',
      width: 400,
      height: 600,
    },
  },
];

describe('ArtworkGrid', () => {
  it('renders artwork titles', () => {
    render(<ArtworkGrid artworks={mockArtworks} />);

    expect(screen.getByText('Mona Lisa')).toBeInTheDocument();
    expect(screen.getByText('Starry Night')).toBeInTheDocument();
  });
});