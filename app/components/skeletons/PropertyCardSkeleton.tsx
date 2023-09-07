import { Skeleton } from '../ui/skeleton';

export default function PropertyCardSkeleton() {
  return (
    <div className='flex flex-col w-full h-auto'>
      <div className='aspect-w-16 aspect-h-10 w-full h-full'>
        <Skeleton />
      </div>
      <div className='flex flex-col space-y-2'>
        <Skeleton className='h-5 w-72 mt-5' />
        <Skeleton className='h-5 w-52' />
        <Skeleton className='h-5 w-32' />
      </div>
    </div>
  );
}
