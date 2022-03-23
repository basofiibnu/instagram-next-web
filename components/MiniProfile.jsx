import React from 'react';

const MiniProfile = () => {
  return (
    <div className="mt-14 ml-10 flex items-center justify-between">
      <img
        src="https://links.papareact.com/3ke"
        alt="mini-pic"
        className="h-16 w-16 rounded-full border p-[2px]"
      />

      <div className="mx-4 flex-1">
        <h2 className="font-bold">kyo</h2>
        <h3 className="text-sm text-gray-400">
          welcome to instagram
        </h3>
      </div>

      <button className="text-sm font-semibold text-blue-400">
        Sign out
      </button>
    </div>
  );
};

export default MiniProfile;
