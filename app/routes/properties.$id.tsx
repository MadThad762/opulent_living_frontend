import { Link, useLoaderData } from '@remix-run/react';
import type { Property } from '~/types/PropertyTypes';
import { json } from '@remix-run/node';
import type { V2_MetaFunction, LoaderFunction } from '@remix-run/node';

interface PropertyCardProps {
  property: Property;
  baseURL: string;
}

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

export default function PropertyDetails({ baseURL }: PropertyCardProps) {
  const property: Property = useLoaderData();

  return (
    <div className='flex flex-col w-full h-auto max-w-7xl mx-auto mt-16'>
      <div className='relative group aspect-w-16 aspect-h-10 w-full h-full'>
        <img
          src={`https://res.cloudinary.com/dwfmymy4z/image/upload/w_2000,q_75/v1695873487/property_listings/${property?.imagePublicId}.jpg`}
          alt={property?.description}
          className='h-full w-full object-cover'
        />
        {property?.isFeatured && (
          <div className='absolute h-full w-full'>
            <div className='bg-white/50 mt-3 ml-3 flex w-min'>
              <span className='text-black text-xs tracking-widest bg-transparent rounded-full px-2.5 py-0.5'>
                FEATURED
              </span>
            </div>
          </div>
        )}
      </div>
      <div className='flex flex-col space-y-1'>
        <Link to={`/properties/${property?.id}`}>
          <h3 className='text-base uppercase tracking-widest mt-4 whitespace-nowrap truncate'>
            {property?.title}
          </h3>
        </Link>
        <ol className='flex flex-row space-x-1.5 text-sm'>
          <li>{property?.numberOfBeds} bds</li>
          <span>|</span>
          <li>{property?.numberOfBaths} ba</li>
          <span>|</span>
          <li>{property?.sqft} sqft</li>
          <span> | </span>
          <li>{property?.propertyType} for sale</li>
        </ol>
        <p className='text-base font-medium'>
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(Number(property?.price))}
        </p>
      </div>
    </div>
  );
}
