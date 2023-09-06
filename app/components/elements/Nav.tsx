import { Button } from '~/components/ui/button';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from '~/components/ui/sheet';
import { Link, useNavigate } from '@remix-run/react';
import { SignedIn, SignedOut, useUser, useAuth } from '@clerk/remix';

export default function Nav() {
  const navItems = [
    { name: 'HOME', href: '/' },
    { name: 'PROPERTIES', href: '/properties' },
    { name: 'ABOUT', href: '/about' },
    { name: 'CONTACT', href: '/contact' },
  ];

  const navigate = useNavigate();
  const { signOut } = useAuth();
  const { user } = useUser();

  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='icon' size='icon' tabIndex={1}>
            <Menu
              className='h-10 w-10'
              strokeWidth={1.5}
              strokeLinecap='square'
            />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <nav className='flex flex-col items-start text-left mt-0'>
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className='mb-6 text-lg tracking-widest'>
                  <SheetClose asChild>
                    <Link to={item.href}>{item.name}</Link>
                  </SheetClose>
                </li>
              ))}
            </ul>
          </nav>
          <div className='border-t-2 border-black flex flex-col'>
            <SignedIn>
              <div className='flex flex-row justify-start items-center pt-6'>
                <div className='h-10 w-10 rounded-full'>
                  <img
                    src={user?.imageUrl}
                    alt={'profile'}
                    className='rounded-full'
                  />
                </div>
                <div className='text-left pl-3'>
                  <p className='text-base tracking-widest uppercase'>
                    {user?.fullName}
                  </p>
                  <p className='text-sm'>
                    {user?.emailAddresses[0]
                      ? user?.emailAddresses[0]?.emailAddress
                      : 'No Email'}
                  </p>
                </div>
              </div>
              <div className='mt-6 flex flex-col space-y-5'>
                <Link to='/profile' className='text-sm tracking-widest'>
                  YOUR PROFILE
                </Link>
                <Link
                  to={'/properties/new-listing'}
                  className='mb-6 text-sm tracking-widest'
                >
                  CREATE A LISTING
                </Link>
                <SheetClose
                  onClick={() => {
                    signOut();
                    navigate('/');
                  }}
                  className='text-sm tracking-widest text-left'
                >
                  SIGN OUT
                </SheetClose>
              </div>
            </SignedIn>
            <SignedOut>
              <Link
                to={'/sign-in'}
                className='pt-6 text-sm tracking-widest text-left'
              >
                SIGN IN
              </Link>
            </SignedOut>
          </div>
          <SheetFooter></SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
