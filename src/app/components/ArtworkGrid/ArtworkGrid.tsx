'use client';

import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { Key } from 'react';

export type Artwork = {
  id: Key;
  title: string;
  thumbnail: {
    lqip: string | StaticImport;
    width: number;
    height: number;
  } | null;
};

export type ArtworkGridProps = {
  artworks: Artwork[];
};

export default function ArtworkGrid({ artworks }: ArtworkGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {artworks.map((artwork) => (
        <button
          key={artwork.id}
          className="rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition duration-300 p-2 text-left"
          onClick={() => alert(`Clicked on "${artwork.title}"`)}
        >
          {artwork.thumbnail?.lqip && (
            <Image
              alt={artwork.title}
              src={artwork.thumbnail.lqip}
              width={200}
              height={Math.floor((artwork.thumbnail.height / artwork.thumbnail.width) * 200)}
              className="rounded mb-2"
            />
          )}
          <h2 className="text-sm font-medium">{artwork.title}</h2>
        </button>
      ))}
    </div>
  );
}