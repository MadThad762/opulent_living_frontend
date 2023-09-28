import { Link } from '@remix-run/react';
import Nav from '~/components/elements/Nav';
import { Button } from '~/components/ui/button';

type PageTopperProps = {
  setShowSettings: (value: boolean) => void;
};

export default function PageTopper({ setShowSettings }: PageTopperProps) {
  return (
    <section className='bg-white h-auto flex flex-col items-center justify-center relative w-full'>
      <div className='h-full w-full z-30 flex flex-col items-center justify-center py-32 sm:py-48 md:py-56 lg:py-64'>
        <h1 className='tracking-widest text-center text-white text-2xl sm:text-3xl md:text-4xl'>
          MY PROFILE
        </h1>
        <p className='text-white text-center mt-2 arapey text-base sm:text-lg md:text-xl'>
          Manage your account and listings all in one place.
        </p>
        <div className='flex flex-col sm:flex-row items-center justify-center w-full sm:space-x-6'>
          <Button
            onClick={() => {
              setShowSettings(false);
            }}
            className='mt-[30px] w-60'
            variant={'hero'}
          >
            VIEW MY LISTINGS
          </Button>
          <Button
            onClick={() => {
              setShowSettings(true);
            }}
            className='mt-3 sm:mt-[30px] w-60'
            variant={'hero'}
          >
            ACCOUNT SETTINGS
          </Button>
        </div>
      </div>
      <div className='absolute top-0 left-0 w-full max-h-20 flex justify-between px-6 lg:px-8 pt-6 z-40'>
        <Link to={'/'} className='h-auto'>
          <img
            src='/images/logos/logo_white.svg'
            alt='Opulent Living Logo'
            className='w-8 sm:w-10 h-auto'
          />
        </Link>
        <Nav />
      </div>
      <div className='absolute inset-0 z-20 bg-black/30'></div>
      <div className='absolute inset-0 z-10'>
        <img
          className='object-cover object-center w-full h-full'
          src='/images/hero_images/hero_mobile.webp'
          alt='A modern minimalist home with a pool.'
          srcSet='/images/hero_images/hero_mobile.webp,
          /images/hero_images/hero_1280.webp 1280w,
          /images/hero_images/hero_1536.webp 1536w,
          /images/hero_images/hero_1920.webp 1920w,
          /images/hero_images/hero_2560.webp 2560w,
          /images/hero_images/hero_3840.webp 3840w'
          sizes='(max-width: 1280px) 100vw,
            (min-width: 1281px) and (max-width: 1536px) 1280px,
            (min-width: 1537px) and (max-width: 1920px) 1536px,
            (min-width: 1921px) and (max-width: 2560px) 1920px,
            (min-width: 2561px) and (max-width: 3840px) 2560px,
            3840px'
        />
      </div>
    </section>
  );
}
