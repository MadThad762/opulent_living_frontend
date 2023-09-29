import { Link } from '@remix-run/react';
export default function About() {
  return (
    <div className='h-full w-full flex flex-col flex-grow justify-between tracking-widest text-2xl sm:text-3xl md:text-4xl'>
      <Link to={'/'} className='text-base mt-8 ml-8'>
        GO BACK
      </Link>
      <p className='w-full text-center'>COMING SOON</p>
      <div></div>
    </div>
  );
}
