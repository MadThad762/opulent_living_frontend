import { SignUp } from '@clerk/remix';

export default function SignUpPage() {
  return (
    <div className='flex h-screen w-full items-center justify-center'>
      <SignUp
        appearance={{
          elements: {
            formButtonPrimary:
              'border-2 border-black bg-white hover:bg-black text-black hover:text-white rounded-none tracking-widest ring-2 ring-black ring-inset',
            card: 'border-2 border-black rounded-none shadow-none',
            formFieldInput: 'rounded-none',
            socialButtonsBlockButton: 'rounded-none',
          },
        }}
      />
    </div>
  );
}
