import type { V2_MetaFunction, LoaderFunction } from '@remix-run/node';
import { useLoaderData, Link } from '@remix-run/react';
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

export const loader: LoaderFunction = async () => {
  try {
    const res = await fetch(
      `${process.env.BASE_URL}/properties?isFeatured=true&limit=3`,
    );

    if (!res.ok) {
      console.error(`An error occurred: ${res.statusText}`);
      return null;
    }

    const propertiesData = await res.json();
    const BASE_URL = process.env.BASE_URL;

    return {
      properties: propertiesData,
      baseURL: BASE_URL,
    };
  } catch (error) {
    console.error('An error occurred:', error);
    return null;
  }
};

export default function Index() {
  const { properties, baseURL } = useLoaderData();
  return (
    <div className='mx-auto w-full'>
      <Hero />
      <PropertyContainer properties={properties} baseURL={baseURL} />
      <div className='flex items-center justify-center px-4 sm:px-6 lg:px-8 mt-16'>
        <Button asChild variant={'default'}>
          <Link to={'/properties'}>VIEW ALL HOMES</Link>
        </Button>
      </div>
    </div>
  );
}
