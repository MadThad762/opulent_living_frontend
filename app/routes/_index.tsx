import type { V2_MetaFunction } from '@remix-run/node';
import Hero from '~/components/pages/home/Hero';

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
    </div>
  );
}
