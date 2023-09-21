import type { V2_MetaFunction, LoaderFunction } from '@remix-run/node';
import PageTopper from '~/components/elements/PageTopper';
import NewListingForm from '~/components/pages/properties/new_listing/NewListingForm';
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/remix';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'New Listing' },
    {
      name: 'description',
      content: 'Create a new property listing.',
    },
  ];
};

export const loader: LoaderFunction = async () => {
  return json({
    BASE_URL: process.env.BASE_URL,
  });
};

export default function NewListing() {
  const { BASE_URL } = useLoaderData();

  return (
    <div className='mx-auto w-full'>
      <SignedIn>
        <PageTopper
          heading={'NEW LISTING'}
          subheading={'Selling a home or piece of property? We can help.'}
        >
          <img
            className='object-cover object-top w-full h-full'
            src='/images/new_listing/new_listing_mobile.webp'
            alt='A beautiful blue home with a rock foundation and white trim. '
            srcSet='/images/new_listing/new_listing_mobile.webp,
          /images/new_listing/new_listing_1280.webp 1280w,
          /images/new_listing/new_listing_1536.webp 1536w,
          /images/new_listing/new_listing_1920.webp 1920w,
          /images/new_listing/new_listing_2560.webp 2560w,
          /images/new_listing/new_listing_3840.webp 3840w'
            sizes='(max-width: 1280px) 100vw,
            (min-width: 1281px) and (max-width: 1536px) 1280px,
            (min-width: 1537px) and (max-width: 1920px) 1536px,
            (min-width: 1921px) and (max-width: 2560px) 1920px,
            (min-width: 2561px) and (max-width: 3840px) 2560px,
            3840px'
          />
        </PageTopper>
        <NewListingForm BASE_URL={BASE_URL} />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
}
