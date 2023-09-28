import { Link } from '@remix-run/react';
import type { Property } from '~/types/PropertyTypes';
import { Trash2 } from 'lucide-react';
import { json } from '@remix-run/node';
import { SignedIn, useUser, useSession } from '@clerk/remix';

interface PropertyCardProps {
  property: Property;
  baseURL: string;
}

export default function PropertyCard({ property, baseURL }: PropertyCardProps) {
  const { user } = useUser();
  const { session } = useSession();

  const handleDelete = async () => {
    try {
      const token = await session?.getToken();
      const res = await fetch(`${baseURL}/properties/${property?.id}`, {
        method: 'DELETE',
        headers: {
          authorization: `${token}`,
          sessionId: `${session?.id}`,
        },
      });

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

  return (
    <div className='flex flex-col w-full h-auto'>
      <div className='relative group aspect-w-16 aspect-h-10 w-full h-full'>
        <img
          src={`https://res.cloudinary.com/dwfmymy4z/image/upload/w_750,q_75/v1695873487/property_listings/${property?.imagePublicId}.jpg`}
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
        <div className='absolute hidden h-full w-full group-hover:flex items-center justify-center bg-black/30 ease-in-out duration-300'>
          <Link
            className='h-full w-full flex items-center justify-center'
            to={`/properties/${property?.id}`}
          >
            <p className='text-white tracking-widest text-xl underline underline-offset-4'>
              VIEW DETAILS
            </p>
          </Link>
          <SignedIn>
            {user?.id === property?.createdBy && (
              <div className='absolute top-0 right-0 flex items-center justify-center mt-3 mr-3'>
                <button
                  onClick={() => {
                    handleDelete();
                  }}
                  className='bg-white/70 rounded-full'
                >
                  <Trash2 className='text-red-500/70 p-3 h-12 w-12' />
                </button>
              </div>
            )}
          </SignedIn>
        </div>
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
