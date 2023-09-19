import { json } from '@remix-run/node';
import type { V2_MetaFunction, LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import type { Property } from '~/types/PropertyTypes';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'Property Details' },
    {
      name: 'description',
      content: 'Detailed property information',
    },
  ];
};

export const loader: LoaderFunction = async ({ params }) => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/properties/${params.id}`);

    if (!res.ok) {
      console.error(`An error occurred: ${res.statusText}`);
      return null;
    }

    return json(await res.json());
  } catch (error) {
    console.error('An error occurred:', error);
    return null;
  }
};

export default function PropertyDetails() {
  const property: Property = useLoaderData();

  return <div className='mx-auto w-full'>{property.id}</div>;
}
