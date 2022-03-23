import {
  getProviders,
  signIn as signInFunction,
} from 'next-auth/react';

export default function signIn({ providers }) {
  console.log(providers);
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          {console.log(provider)}
          <button onClick={() => signInFunction(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
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
