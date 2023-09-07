import PropertyCardSkeleton from '~/components/skeletons/PropertyCardSkeleton';

interface PropertySkeletonContainerProps {
  count?: number;
  padding?: string;
  margin?: string;
}

export default function PropertySkeletonContainer({
  count = 1,
  padding = 'px-6 lg:px-8',
  margin = 'mt-7 md:mt-20',
}: PropertySkeletonContainerProps) {
  return (
    <section
      className={`${padding} ${margin} grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-6 lg:gap-8`}
    >
      {Array.from({ length: count }, (_, index) => (
        <PropertyCardSkeleton key={index} />
      ))}
    </section>
  );
}
