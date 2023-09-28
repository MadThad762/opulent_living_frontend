import type { V2_MetaFunction, LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import PropertyContainer from '~/components/elements/PropertyContainer';
import PageTopper from '~/components/elements/PageTopper';

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

export default function Properties() {
  const { properties, baseURL } = useLoaderData();

  return (
    <div className='mx-auto w-full'>
      <PageTopper
        propertiesIsActive={true}
        heading={'PROPERTY LISTINGS'}
        subheading={'Explore our vast selection of luxury homes and estates'}
      >
        <img
          className='object-cover object-center w-full h-full'
          src='/images/properties/properties_mobile.webp'
          alt='A beautiful blue home with a rock foundation and white trim. '
          srcSet='/images/properties/properties_mobile.webp,
          /images/properties/properties_1280.webp 1280w,
          /images/properties/properties_1536.webp 1536w,
          /images/properties/properties_1920.webp 1920w,
          /images/properties/properties_2560.webp 2560w,
          /images/properties/properties_3840.webp 3840w'
          sizes='(max-width: 1280px) 100vw,
            (min-width: 1281px) and (max-width: 1536px) 1280px,
            (min-width: 1537px) and (max-width: 1920px) 1536px,
            (min-width: 1921px) and (max-width: 2560px) 1920px,
            (min-width: 2561px) and (max-width: 3840px) 2560px,
            3840px'
        />
      </PageTopper>
      <PropertyContainer properties={properties} baseURL={baseURL} />
    </div>
  );
}
