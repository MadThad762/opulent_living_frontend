import type { V2_MetaFunction, LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import PropertyContainer from '~/components/elements/PropertyContainer';
import {
  UserProfile,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from '@clerk/remix';
import { getAuth } from '@clerk/remix/ssr.server';
import PageTopper from '~/components/pages/profile/PageTopper';
import { useState } from 'react';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'My Profile' },
    {
      name: 'description',
      content: 'My profile info and property listings.',
    },
  ];
};

export const loader: LoaderFunction = async (args) => {
  try {
    const { userId } = await getAuth(args);

    if (!userId) {
      return null;
    }

    const res = await fetch(
      `${process.env.BASE_URL}/properties/user/${userId}`,
    );

    if (!res.ok) {
      console.error(`An error occurred: ${res.statusText}`);
      return null;
    }

    const propertiesData = await res.json();
    const BASE_URL = process.env.BASE_URL;

    return {
      properties: propertiesData,
      baseURL: BASE_URL,
    };
  } catch (error) {
    console.error('An error occurred:', error);
    return null;
  }
};

export default function Profile() {
  const { properties, baseURL } = useLoaderData();

  const [showSettings, setShowSettings] = useState(false);
  return (
    <div className='mx-auto w-full'>
      <SignedIn>
        <PageTopper setShowSettings={setShowSettings} />
        {showSettings ? (
          <div className='flex w-full mt-16 flex-col mx-auto items-center justify-center'>
            <UserProfile
              appearance={{
                elements: {
                  card: 'rounded-none shadow-none border-2 border-black',
                },
              }}
            />
          </div>
        ) : (
          <PropertyContainer properties={properties} baseURL={baseURL} />
        )}
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
}
