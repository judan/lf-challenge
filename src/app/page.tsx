import Image from 'next/image';
import ArtworkGrid from './components/ArtworkGrid/ArtworkGrid';

export default async function Home() {
  const res = await fetch('https://api.artic.edu/api/v1/artworks?page=1&limit=100');
  const json = await res.json();
  const chicagoArtworks = json.data;

  return (
    <main className="p-6">
      <>
        <Image alt="palette" src="/palette.png" width={100} height={100} />
        <h1 className="text-3xl font-bold mb-6">Artworks from The Art Institute of Chicago API</h1>
      </>
      <ArtworkGrid artworks={chicagoArtworks} />
    </main>
  );
}
