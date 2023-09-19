import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form';
import NewListingPropertyCard from './NewListingPropertyCard';
import { Textarea } from '~/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';

const formSchema = z.object({
  title: z.string().min(3).max(50),
  description: z.string().min(3).max(500),
  imageUrls: z.instanceof(File).refine(
    (file) => {
      return ['image/jpeg', 'image/png'].includes(file.type);
    },
    {
      message: 'Uploaded file must be a .jpg or .png image',
    },
  ),
  propertyType: z.enum([
    'house',
    'apartment',
    'condo',
    'townhouse',
    'land',
    'parking',
    'other',
  ]),
  price: z.number().min(0).max(1000000000),
  numberOfBeds: z.number().min(0).max(100),
  numberOfBaths: z.number().min(0).max(100),
  sqft: z.number().min(0).max(1000000000),
});

export default function NewListingForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      imageUrls: undefined,
      propertyType: 'house',
      price: undefined,
      numberOfBeds: undefined,
      numberOfBaths: undefined,
      sqft: undefined,
    },
  });

  const { setValue, watch } = form;

  const watchedValues = watch();

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setValue('imageUrls', file); // You set the imageUrls field here
    }
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className='px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl mt-16 sm:mt-24 lg:mt-32 flex flex-col lg:flex-row lg:gap-x-16 w-full'>
      <div className='flex w-full'>
        <NewListingPropertyCard property={watchedValues} />
      </div>
      <div className='flex flex-col w-full pt-16 lg:pt-0'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <FormField
              control={form.control}
              name='title'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>TITLE</FormLabel>
                  <FormControl>
                    <Input placeholder='A beautiful home in...' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='description'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>DESCRIPTION</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='A brief description about the property...'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='flex flex-col lg:flex-row lg:space-x-6'>
              <div className='w-full'>
                <FormField
                  control={form.control}
                  name='imageUrls'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>IMAGE</FormLabel>
                      <FormControl>
                        <Input type='file' onChange={handleFileChange} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='pt-8 lg:pt-0 w-full'>
                <FormField
                  control={form.control}
                  name='propertyType'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>TYPE OF PROPERTY</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger className='w-full'>
                            <SelectValue placeholder='Property Type' />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value='house'>House</SelectItem>
                            <SelectItem value='apartment'>Apartment</SelectItem>
                            <SelectItem value='condo'>Condo</SelectItem>
                            <SelectItem value='townhouse'>Townhouse</SelectItem>
                            <SelectItem value='land'>Land</SelectItem>
                            <SelectItem value='parking'>Parking</SelectItem>
                            <SelectItem value='other'>Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className='flex flex-col lg:flex-row lg:space-x-6'>
              <div className='w-full'>
                <FormField
                  control={form.control}
                  name='numberOfBeds'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>NUMBER OF BEDS</FormLabel>
                      <FormControl>
                        <Input
                          className='no-arrows'
                          type='number'
                          onChange={(e) =>
                            field.onChange(Number(e.target.value))
                          }
                          value={Number(field.value)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='pt-8 lg:pt-0 w-full'>
                <FormField
                  control={form.control}
                  name='numberOfBaths'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>NUMBER OF BATHS</FormLabel>
                      <FormControl>
                        <Input
                          className='no-arrows'
                          type='number'
                          onChange={(e) =>
                            field.onChange(Number(e.target.value))
                          }
                          value={Number(field.value)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className='flex flex-col lg:flex-row lg:space-x-6'>
              <div className='w-full'>
                <FormField
                  control={form.control}
                  name='sqft'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>SQUARE FOOTAGE</FormLabel>
                      <FormControl>
                        <Input
                          className='no-arrows'
                          type='number'
                          onChange={(e) =>
                            field.onChange(Number(e.target.value))
                          }
                          value={Number(field.value)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='pt-8 lg:pt-0 w-full'>
                <FormField
                  control={form.control}
                  name='price'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>PRICE</FormLabel>
                      <FormControl>
                        <Input
                          className='no-arrows'
                          type='number'
                          onChange={(e) =>
                            field.onChange(Number(e.target.value))
                          }
                          value={Number(field.value)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <Button type='submit'>Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
