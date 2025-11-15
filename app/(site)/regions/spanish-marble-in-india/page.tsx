import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { RegionPlaybook } from '@/components/regions/RegionPlaybook';
import { regionLandings } from '@/data/regions';

const region = regionLandings.find((entry) => entry.slug === 'spanish-marble-in-india');

export const metadata: Metadata = {
  title: region ? region.title : 'Region',
  description: region?.intro,
  openGraph: {
    title: region?.title || 'Region',
    description: region?.intro || ''
  }
};

export default function RegionPage() {
  if (!region) {
    return null;
  }

  return (
    <>
      <PageHeader title={region.title} description={region.intro} />
      <RegionPlaybook region={region} />
    </>
  );
}
