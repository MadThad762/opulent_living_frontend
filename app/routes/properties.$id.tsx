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

  return (
    <div className='mx-auto w-full'>
      <img
        src={`https://res.cloudinary.com/dwfmymy4z/image/upload/w_2000,q_75/v1695873487/property_listings/${property?.imagePublicId}.jpg`}
        alt={property?.description}
      />
      <p>{property?.title}</p>
      <p>{property?.description}</p>
      <p>{property?.price}</p>
    </div>
  );
}
