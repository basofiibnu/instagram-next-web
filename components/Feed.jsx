import React from 'react';
import Stories from './Stories';
import Posts from './Posts';
import MiniProfile from './MiniProfile';

const Feed = () => {
  return (
    <main className="md: mx-auto grid max-w-3xl grid-cols-1 md:grid-cols-2 xl:max-w-6xl xl:grid-cols-3">
      <section className="col-span-2">
        <Stories />
        <Posts />
      </section>
      <section>
        <MiniProfile />
      </section>
    </main>
  );
};

export default Feed;
