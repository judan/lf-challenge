import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import ArtworkDetail, { ArtworkDetailProps } from './ArtworkDetail';

const mockArtwork: ArtworkDetailProps =
  {
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
  }
;

describe('ArtworkGrid', () => {
  it('renders artwork title', () => {
    render(<ArtworkDetail {...mockArtwork} />);

    expect(screen.getByText('Starry Night')).toBeInTheDocument();
  });

  it('renders artist text', () => {
    render(<ArtworkDetail {...mockArtwork} />);
    expect(screen.getByText(/Vincent van Gogh/)).toBeInTheDocument();
  });

  it('renders image with correct alt and src', () => {
    render(<ArtworkDetail {...mockArtwork} />);
    const img = screen.getByAltText(/swirling night sky/i);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute(
      'src',
      expect.stringContaining(mockArtwork.image_id!)
    );
  });

  it('renders fallback image if image_id is missing', () => {
    const noImageArtwork = { ...mockArtwork, image_id: null };
    render(<ArtworkDetail {...noImageArtwork} />);
    const img = screen.getByAltText(/swirling night sky/i);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', expect.stringContaining('/palette.png'));
  });

  it('displays origin, medium, dimensions, and credit line', () => {
    render(<ArtworkDetail {...mockArtwork} />);
    expect(screen.getByText(/Netherlands/)).toBeInTheDocument();
    expect(screen.getByText(/Oil on canvas/)).toBeInTheDocument();
    expect(screen.getByText(/73.7 x 92.1 cm/)).toBeInTheDocument();
    expect(screen.getByText(/Gift of a Cool Donor/)).toBeInTheDocument();
  });

  it('renders a back button that links to artwork list page', async () => {
    render(<ArtworkDetail {...mockArtwork} />);
    
    const backLink = screen.getByRole('link', { name: /back to home/i });
    const user = userEvent.setup();

    expect(backLink).toBeInTheDocument();
    expect(backLink).toHaveAttribute('href', '/');

    await user.click(backLink);
  });
});