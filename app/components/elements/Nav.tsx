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

export default function Nav({
  homeIsActive = false,
  propertiesIsActive = false,
  aboutIsActive = false,
  contactIsActive = false,
}) {
  const navItems = [
    { name: 'HOME', href: '/', isActive: homeIsActive },
    { name: 'PROPERTIES', href: '/properties', isActive: propertiesIsActive },
    { name: 'ABOUT', href: '/about', isActive: aboutIsActive },
    { name: 'CONTACT', href: '/contact', isActive: contactIsActive },
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
                    <Link
                      to={item.href}
                      className={`${
                        item.isActive && 'font-semibold hover:font-semibold'
                      } hover:font-medium`}
                    >
                      {item.name}
                    </Link>
                  </SheetClose>
                </li>
              ))}
            </ul>
          </nav>
          <div className='border-t-2 border-black flex flex-col'>
            <SignedIn>
              <div className='flex flex-row justify-start items-center pt-6'>
                <Link to={'/profile'} className='h-10 w-10 rounded-full'>
                  <img
                    src={user?.imageUrl}
                    alt={'profile'}
                    className='rounded-full'
                  />
                </Link>
                <div className='text-left pl-3'>
                  <Link
                    to={'/profile'}
                    className='text-base font-medium uppercase tracking-widest'
                  >
                    {user?.fullName}
                  </Link>
                  <p className='text-sm text-black/50'>
                    {user?.emailAddresses[0]
                      ? user?.emailAddresses[0]?.emailAddress
                      : 'No Email'}
                  </p>
                </div>
              </div>
              <div className='mt-6 flex flex-col space-y-5'>
                <SheetClose asChild>
                  <Link
                    to='/profile'
                    className='text-sm tracking-widest hover:font-medium'
                  >
                    YOUR PROFILE
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    to={'/properties/new-listing'}
                    className='mb-6 text-sm tracking-widest hover:font-medium'
                  >
                    CREATE A LISTING
                  </Link>
                </SheetClose>
                <SheetClose
                  onClick={() => {
                    signOut();
                    navigate('/properties/new-listing');
                  }}
                  className='text-sm tracking-widest text-left hover:font-medium'
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
