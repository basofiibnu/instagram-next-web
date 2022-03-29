import React from 'react';

const Story = ({ img, username }) => {
  return (
    <div>
      <img
        src={img}
        alt="story-pic"
        className="h-14 w-14 cursor-pointer rounded-full border-2 border-red-500 object-contain p-[1.5px] transition-all duration-200 ease-out hover:scale-110"
      />
      <p className="text-ws mt-1 w-14 truncate text-center text-sm">
        {username}
      </p>
    </div>
  );
};

export default Story;
