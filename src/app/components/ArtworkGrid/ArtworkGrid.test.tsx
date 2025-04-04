import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { vi, describe, it, expect } from 'vitest';
import ArtworkGrid from './ArtworkGrid';
import { minArtworkData } from '@/app/page';

const mockPush = vi.fn();

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

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

  it('renders images with correct alt and src', () => {
    render(<ArtworkGrid artworks={mockArtworks} />);
      const img = screen.getByAltText(/Starry Night/i);
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute(
        'src',
        expect.stringContaining(mockArtworks[1].image_id!)
      );
    });
  
    it('renders fallback image if image_id is missing', () => {
      const noImageArtwork = { 
          id: '1',
          title: 'Mona Lisa',
          image_id: '',
          thumbnail: {
            lqip: 'https://placehold.co/400',
            width: 400,
            height: 600,
          },
      };
      render(<ArtworkGrid artworks={[noImageArtwork]} />);
      const img = screen.getByAltText(/Mona Lisa/i);
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute('src', expect.stringContaining('/palette.png'));
    });

    it('routes to the artwork detail page on click', async () => {
        render(<ArtworkGrid artworks={mockArtworks} />);    
        const artworkButton = screen.getByLabelText(/Mona Lisa/)
        const user = userEvent.setup();
    
        expect(artworkButton).toBeInTheDocument();
    
        await user.click(artworkButton);
        expect(mockPush).toHaveBeenCalledWith('/artwork/1')
      });
});