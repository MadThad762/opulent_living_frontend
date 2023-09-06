import type { V2_MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';
import PropertyCard from '~/components/elements/PropertyCard';
import PropertyContainer from '~/components/elements/PropertyContainer';
import Hero from '~/components/pages/home/Hero';
import { Button } from '~/components/ui/button';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'Properties API' },
    {
      name: 'description',
      content:
        'A full stack application for viewing, adding, and deleting property listings built with Remix, Express, Prisma, PlanetScale, and Clerk.',
    },
  ];
};

export default function Index() {
  return (
    <div className='mx-auto'>
      <Hero />
      <PropertyContainer>
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </PropertyContainer>
      <div className='flex items-center justify-center px-6 lg:px-8 mt-16'>
        <Button asChild variant={'default'}>
          <Link to={'/properties'}>VIEW ALL HOMES</Link>
        </Button>
      </div>
    </div>
  );
}
