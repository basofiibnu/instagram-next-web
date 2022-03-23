import {
  getProviders,
  signIn as signInFunction,
} from 'next-auth/react';
import { Fragment } from 'react';

import Header from '../../components/Header';

export default function signIn({ providers }) {
  return (
    <Fragment>
      <Header />
      <div className="-mt56 flex min-h-screen flex-col items-center justify-center py-2 px-14 text-center">
        <img
          className="w-80"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2880px-Instagram_logo.svg.png"
          alt="logo-pic"
        />
        <p className="font-xs italic">
          Built only for portfolio purpose
        </p>
        <div className="mt-10">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="rounded-lg bg-blue-500 p-3 text-white"
                onClick={() =>
                  signInFunction(provider.id, {
                    callbackUrl: '/',
                  })
                }
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

/*
// If older than Next.js 9.3
SignIn.getInitialProps = async () => {
  return {
    providers: await getProviders()
  }
}
*/
