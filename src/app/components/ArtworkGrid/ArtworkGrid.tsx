'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { minArtworkData } from '@/app/page';


export type ArtworkGridProps = {
  artworks:  minArtworkData[];
};

export default function ArtworkGrid({ artworks }: ArtworkGridProps) {
  const router = useRouter();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {artworks.map((artwork) => (
        <button
          aria-label={artwork.title}
          key={artwork.id}
          className="rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition duration-300 p-2 text-left"
          onClick={() => router.push(`/artwork/${artwork.id}`)}
        >
          <Image
            alt={artwork.title}
            src={
              !artwork?.image_id
                ? '/palette.png'
                : `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`
            }
            width={400}
            height={300}
            className="rounded mb-2"
          />
          <h2 className="text-sm font-medium">{artwork.title}</h2>
        </button>
      ))}
    </div>
  );
}