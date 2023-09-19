import type { NewListingProperty } from '~/types/PropertyTypes';
import { Image } from 'lucide-react';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';

interface PropertyCardProps {
  property: NewListingProperty;
}

export default function NewListingPropertyCard({
  property,
}: PropertyCardProps) {
  return (
    <div className='flex flex-col w-full h-auto'>
      <div className='relative group w-full'>
        <AspectRatio ratio={16 / 10} className='w-full h-full'>
          {property?.imageUrls ? (
            <img
              src={
                property?.imageUrls
                  ? URL.createObjectURL(property?.imageUrls)
                  : undefined
              }
              alt={property?.description}
              className='h-full w-full object-cover'
            />
          ) : (
            <div className='flex justify-center items-center w-full h-full bg-gray-100'>
              <Image className='w-12 h-12 text-gray-200' />
            </div>
          )}
        </AspectRatio>
      </div>
      <div className='flex flex-col space-y-1'>
        <h3 className='text-base uppercase tracking-widest mt-4 whitespace-nowrap truncate'>
          {property?.title ? property?.title : 'PROPERTY TITLE'}
        </h3>
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
          {property?.price
            ? new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              }).format(Number(property?.price))
            : '$0'}
        </p>
      </div>
    </div>
  );
}
