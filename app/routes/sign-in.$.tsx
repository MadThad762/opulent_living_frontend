import { SignIn } from '@clerk/remix';

export default function SignInPage() {
  return (
    <div className='flex h-screen w-full items-center justify-center'>
      <SignIn
        appearance={{
          elements: {
            formButtonPrimary:
              'bg-green-300 hover:bg-green-400 text-white font-bold',
          },
        }}
      />
    </div>
  );
}
