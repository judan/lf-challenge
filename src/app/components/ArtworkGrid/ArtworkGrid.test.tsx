import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ArtworkGrid from './ArtworkGrid';
import type { Artwork } from './ArtworkGrid';
import { describe, it, expect } from 'vitest';

const mockArtworks: Artwork[] = [
  {
    id: '1',
    title: 'Mona Lisa',
    thumbnail: {
      lqip: 'https://placehold.co/400',
      width: 400,
      height: 600,
    },
  },
  {
    id: '2',
    title: 'Starry Night',
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