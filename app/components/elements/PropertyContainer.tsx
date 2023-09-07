import PropertyCard from '~/components/elements/PropertyCard';

interface Property {
  createdAt: string;
  createdBy: string;
  description: string;
  id: number;
  images: string;
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

interface PropertyContainerProps {
  properties: Property[];
  padding?: string;
  margin?: string;
}

export default function PropertyContainer({
  properties,
  padding = 'px-6 lg:px-8',
  margin = 'mt-7 md:mt-20',
}: PropertyContainerProps) {
  return (
    <section
      className={`${padding} ${margin} grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-6 lg:gap-8`}
    >
      {properties?.map((property: Property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </section>
  );
}
