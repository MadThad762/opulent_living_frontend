import { Link } from '@remix-run/react';
import Nav from '~/components/elements/Nav';
import { Button } from '~/components/ui/button';

export default function Hero() {
  return (
    <section className='bg-white h-auto flex flex-col items-center justify-center relative w-full'>
      <div className='h-full w-full z-30 flex flex-col items-center justify-center py-32 sm:py-48 md:py-64 lg:py-72 xl:py-80'>
        <h2 className='tracking-widest text-base balance px-6 lg:px-8 sm:text-lg text-center text-white'>
          AMERICA'S HOME <br className='sm:hidden' /> FOR LUXURY REAL ESTATE
        </h2>
        <h1 className='tracking-widest text-center text-white text-[32px] sm:text-[44px] md:text-[70px] mt-1.5'>
          OPULENT LIVING
        </h1>
        <p className='text-white text-center mt-1.5 arapey text-[19px] sm:text-[21px]'>
          Find your dream home
        </p>
        <Button className='mt-[30px]' asChild variant={'hero'}>
          <Link to={'/properties'}>VIEW ALL HOMES</Link>
        </Button>
      </div>
      <div className='absolute top-0 left-0 w-full max-h-20 flex justify-between px-6 lg:px-8 pt-6 z-40'>
        <Link to={'/'} className='h-auto'>
          <img
            src='/images/logos/logo_white.svg'
            alt='Opulent Living Logo'
            className='w-8 sm:w-10 h-auto'
          />
        </Link>
        <Nav homeIsActive={true} />
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
