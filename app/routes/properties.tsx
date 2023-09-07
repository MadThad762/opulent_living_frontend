import { json } from '@remix-run/node';
import type { V2_MetaFunction, LoaderFunction } from '@remix-run/node';
import { Button } from '~/components/ui/button';
import { useLoaderData, Link } from '@remix-run/react';
import PropertyContainer from '~/components/elements/PropertyContainer';
import Nav from '~/components/elements/Nav';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'Properties' },
    {
      name: 'description',
      content: 'Property listings',
    },
  ];
};

export const loader: LoaderFunction = async () => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/properties`);

    if (!res.ok) {
      console.error(`An error occurred: ${res.statusText}`);
      return null;
    }

    return json(await res.json());
  } catch (error) {
    console.error('An error occurred:', error);
    return null;
  }
};

export default function Properties() {
  const properties = useLoaderData();
  console.log(properties);

  return (
    <div className='mx-auto w-full'>
      <div className='flex flex-row justify-between items-center w-full'>
        <Button asChild variant={'default'} size={'default'}>
          <Link to={'/'}>Go Home</Link>
        </Button>
        <Nav propertiesIsActive={true} />
      </div>
      <PropertyContainer properties={properties} />
    </div>
  );
}
