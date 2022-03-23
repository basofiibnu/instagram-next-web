import React from 'react';
import { signOut, useSession } from 'next-auth/react';

const MiniProfile = () => {
  const { data: session } = useSession();
  console.log(session);

  return (
    <div className="mt-14 ml-10 flex items-center justify-between">
      <img
        src={session?.user?.image}
        alt="mini-pic"
        className="h-16 w-16 rounded-full border p-[2px]"
      />

      <div className="mx-4 flex-1">
        <h2 className="font-bold">{session?.user?.username}</h2>
        <h3 className="text-sm text-gray-400">
          welcome to instagram
        </h3>
      </div>

      <button
        onClick={signOut}
        className="text-sm font-semibold text-blue-400"
      >
        Sign out
      </button>
    </div>
  );
};

export default MiniProfile;
