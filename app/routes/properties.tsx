import type { V2_MetaFunction } from '@remix-run/node';
import { useEffect, useState } from 'react';
import { SignedIn, SignedOut, RedirectToSignIn, useAuth } from '@clerk/remix';
import { Link } from '@remix-run/react';
import axiosInstance from '~/utils/axiosInstance';
import { Button } from '~/components/ui/button';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'Properties' },
    {
      name: 'description',
      content: 'Property listings',
    },
  ];
};

interface Property {
  id: string;
  title: string;
  price: number;
}

export default function Properties() {
  const { getToken } = useAuth();
  const [data, setData] = useState<Property[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = await getToken();
      try {
        const response = await axiosInstance.get<Property[]>('/properties', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20'>
      <SignedIn>
        <Button asChild variant={'default'} size={'default'}>
          <Link to={'/'}>Go Home</Link>
        </Button>

        {/* map over data and display */}
        {data?.map((property: Property) => (
          <div key={property.id}>
            <h1>{property.title}</h1>
            <p>{property.price}</p> {/* Corrected 'pice' to 'price' */}
          </div>
        ))}
      </SignedIn>
      <SignedOut>
        <div>hello you are signed out</div>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
}
