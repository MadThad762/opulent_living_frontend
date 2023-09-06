import { SignUp } from '@clerk/remix';

export default function SignUpPage() {
  return (
    <div className='flex h-screen w-full items-center justify-center'>
      <SignUp />
    </div>
  );
}
