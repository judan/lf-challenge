import ArtworkDetail, { ArtworkDetailProps } from '../../components/ArtworkDetail/ArtworkDetail';

export default async function ArtworkPage({ params }: { params: { id: string } }) {
  const res = await fetch(`https://api.artic.edu/api/v1/artworks/${params.id}`);
  const { data }: { data: ArtworkDetailProps } = await res.json();

  return <ArtworkDetail {...data} />;
}