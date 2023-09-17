import { Link } from '@remix-run/react';

interface Property {
  createdAt: string;
  createdBy: string;
  description: string;
  id: number;
  imageUrls: string[];
  isActive: boolean;
  isSold: boolean;
  numberOfBaths: number;
  numberOfBeds: number;
  price: string;
  propertyType: string;
  sqft: number;
  title: string;
  updatedAt: string;
}

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className='flex flex-col w-full h-auto'>
      <div className='relative group aspect-w-16 aspect-h-10 w-full h-full'>
        <img
          src={property?.imageUrls[0]}
          alt={property?.description}
          className='h-full w-full object-cover'
        />
        <div className='absolute hidden h-full w-full group-hover:flex items-center justify-center bg-black/30 ease-in-out duration-300'>
          <Link
            className='h-full w-full flex items-center justify-center'
            to={`/properties/${property?.id}`}
          >
            <p className='text-white tracking-widest text-xl'>VIEW DETAILS</p>
          </Link>
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
          <li>A {property?.propertyType} for sale</li>
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
