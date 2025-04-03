'use client';
import Image from 'next/image';
import Link from 'next/link';

export type ArtworkDetailProps = {
  id: number;
  title: string;
  artist_display: string;
  date_display: string;
  image_id: string | null;
  place_of_origin: string;
  medium_display: string;
  dimensions: string;
  credit_line: string;
  thumbnail: {
    alt_text: string;
  } | null;
};

export default function ArtworkDetail(props: ArtworkDetailProps) {
  const {
    title,
    artist_display,
    date_display,
    place_of_origin,
    medium_display,
    dimensions,
    credit_line,
    image_id,
    thumbnail,
  } = props;

  const imageUrl = image_id
    ? `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`
    : '/palette.png';

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-6">
        <Link href="/">
          <button
            className="flex items-center space-x-2 text-sm text-white-700 hover:underline"
          >
            <Image alt="back" width={20} height={20} src="/icons8-back-26.png" />
            <span>Back to Home</span>
          </button>
        </Link>
      </div>
      <div className="mb-6">
        <Image
          src={imageUrl}
          alt={thumbnail?.alt_text || title}
          width={843}
          height={600}
          className="rounded shadow-lg"
        />
      </div>
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-lg text-white-700 mb-2"><strong>Artist:</strong> {artist_display}</p>
      <p className="text-lg text-white-700 mb-2"><strong>Date:</strong> {date_display}</p>
      <p className="text-lg text-white-700 mb-2"><strong>Origin:</strong> {place_of_origin}</p>
      <p className="text-lg text-white-700 mb-2"><strong>Medium:</strong> {medium_display}</p>
      <p className="text-lg text-white-700 mb-2"><strong>Dimensions:</strong> {dimensions}</p>
      <p className="text-lg text-white-700"><strong>Credit:</strong> {credit_line}</p>
    </main>
  );
}