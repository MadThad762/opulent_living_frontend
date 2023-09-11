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
      <div className='aspect-w-16 aspect-h-10 w-full h-full'>
        <img
          src={property?.imageUrls[0]}
          alt={property?.description}
          className='h-full w-full object-cover'
        />
      </div>
      <div className='flex flex-col space-y-2'>
        <h3 className='text-lg uppercase tracking-widest mt-5 whitespace-nowrap truncate'>
          {property?.title}
        </h3>
        <ol className='flex flex-row space-x-2 text-base'>
          <li>{property?.numberOfBeds} bds</li>
          <span>|</span>
          <li>{property?.numberOfBaths} ba</li>
          <span>|</span>
          <li>{property?.sqft} sqft</li>
          <span> | </span>
          <li>A {property?.propertyType} for sale</li>
        </ol>
        <p className='text-lg font-medium'>
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
