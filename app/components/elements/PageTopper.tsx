import { Link } from '@remix-run/react';
import Nav from '~/components/elements/Nav';

interface PageTopperProps {
  children: React.ReactElement<'img'>;
  propertiesIsActive?: boolean;
  aboutIsActive?: boolean;
  contactIsActive?: boolean;
  heading: string;
  subheading: string;
}

export default function PageTopper({
  children,
  propertiesIsActive = false,
  aboutIsActive = false,
  contactIsActive = false,
  heading,
  subheading,
}: PageTopperProps) {
  return (
    <section className='bg-white h-auto flex flex-col items-center justify-center relative w-full'>
      <div className='h-full w-full z-30 flex flex-col items-center justify-center py-32 sm:py-48 md:py-56 lg:py-72'>
        <h1 className='tracking-widest text-center text-white text-2xl sm:text-3xl md:text-4xl'>
          {heading}
        </h1>
        <p className='text-white text-center mt-2 arapey text-base sm:text-lg md:text-xl'>
          {subheading}
        </p>
      </div>
      <div className='absolute top-0 left-0 w-full max-h-20 flex justify-between px-6 lg:px-8 pt-6 z-40'>
        <Link to={'/'} className='h-auto'>
          <img
            src='/images/logos/logo_white.svg'
            alt='Opulent Living Logo'
            className='w-8 sm:w-10 h-auto'
          />
        </Link>
        <Nav
          propertiesIsActive={propertiesIsActive}
          aboutIsActive={aboutIsActive}
          contactIsActive={contactIsActive}
        />
      </div>
      <div className='absolute inset-0 z-20 bg-black/30'></div>
      <div className='absolute inset-0 z-10'>{children}</div>
    </section>
  );
}
