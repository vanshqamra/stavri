import { RegionLanding } from '@/data/regions';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';

interface RegionPlaybookProps {
  region: RegionLanding;
}

export const RegionPlaybook = ({ region }: RegionPlaybookProps) => {
  return (
    <Container className="space-y-12 py-16">
      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Demand Snapshot</h2>
          <p className="mt-3 text-base text-slate-600">{region.demand}</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Shipping Routes & Corridors</h2>
          <p className="mt-3 text-base text-slate-600">{region.shippingRoutes}</p>
          <p className="mt-3 text-base text-slate-600">{region.corridorSupport}</p>
        </div>
      </section>
      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6">
          <h3 className="text-lg font-semibold text-slate-900">Preferred Marbles</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {region.popularMarbles.map((stone) => (
              <li key={stone} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-500" aria-hidden="true" />
                {stone}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6">
          <h3 className="text-lg font-semibold text-slate-900">Why Rab Noor Pvt Ltd</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {region.advantages.map((advantage) => (
              <li key={advantage} className="flex items-start gap-2">
                <svg className="mt-1 h-4 w-4 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
                </svg>
                <span>{advantage}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="rounded-3xl border border-dashed border-amber-200 bg-amber-50 p-6 text-center">
        <h3 className="text-lg font-semibold text-amber-900">{region.cta}</h3>
        <p className="mt-3 text-sm text-amber-800">
          Share current demand, port preferences, and timeline so we can reserve quarry lots and freight space.
        </p>
        <Button href="/contact" className="mt-4">
          Speak with a Specialist
        </Button>
      </section>
    </Container>
  );
};
