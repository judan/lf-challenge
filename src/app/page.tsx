import Image from 'next/image';
import ArtworkGrid from './components/ArtworkGrid/ArtworkGrid';

export type minArtworkData = {
  id: string | number;
  title: string;
  image_id: string | null;
  thumbnail: unknown;
};

export default async function Home() {
  const res = await fetch('https://api.artic.edu/api/v1/artworks?page=1&limit=100');
  const json = await res.json();
  const chicagoArtworks: minArtworkData[] = json.data;
  const summarizedArtworks = chicagoArtworks.map((artwork) => ({
    id: artwork.id,
    title: artwork.title,
    image_id: artwork.image_id,
    thumbnail: artwork.thumbnail
  }));

  return (
    <main className="p-6">
      <>
        <Image alt="palette" src="/palette.png" width={100} height={100} />
        <h1 className="text-3xl font-bold mb-6">Artworks from The Art Institute of Chicago API</h1>
      </>
      <ArtworkGrid artworks={summarizedArtworks} />
    </main>
  );
}
