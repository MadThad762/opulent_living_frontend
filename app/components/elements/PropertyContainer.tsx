import PropertyCard from '~/components/elements/PropertyCard';
import type { Property } from '~/types/PropertyTypes';

interface PropertyContainerProps {
  properties: Property[];
  baseURL: string;
}

export default function PropertyContainer({
  properties,
  baseURL,
}: PropertyContainerProps) {
  return (
    <section
      className={`mt-8 sm:mt-12 lg:mt-16 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8`}
    >
      {properties?.map((property: Property) => (
        <PropertyCard key={property.id} property={property} baseURL={baseURL} />
      ))}
    </section>
  );
}
