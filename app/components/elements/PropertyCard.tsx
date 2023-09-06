export default function PropertyCard() {
  return (
    <div className='flex flex-col w-full h-auto'>
      <div>
        <img src='' alt='' className='aspect-w-16 aspect-h-10 bg-black' />
      </div>
      <div className='flex flex-col space-y-2'>
        <h3 className='text-lg uppercase tracking-widest mt-5'>
          Luxury condo in Miami
        </h3>
        <ol className='flex flex-row space-x-2 text-base'>
          <li>{4} bds</li>
          <span>|</span>
          <li>{5} ba</li>
          <span>|</span>
          <li>{1750} sqft</li>
          <span> | </span>
          <li>{'House'} for sale</li>
        </ol>
        <p className='text-lg font-medium'>{'$599,000'}</p>
      </div>
    </div>
  );
}
