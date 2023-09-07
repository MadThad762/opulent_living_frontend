import type { LoaderFunction, LinksFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import stylesheet from '~/tailwind.css';
import { rootAuthLoader } from '@clerk/remix/ssr.server';
import {
  ClerkApp,
  ClerkCatchBoundary,
  V2_ClerkErrorBoundary,
} from '@clerk/remix';
import Footer from './components/elements/Footer';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
];

export const loader: LoaderFunction = (args) => rootAuthLoader(args);
// add a Catch Boundary
export const CatchBoundary = ClerkCatchBoundary();
export const ErrorBoundary = V2_ClerkErrorBoundary();

function App() {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <Meta />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Arapey:ital@0;1&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        />
        <Links />
      </head>
      <body>
        <div className='flex flex-col justify-between min-h-screen w-full items-start'>
          <Outlet />
          <Footer />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default ClerkApp(App);
