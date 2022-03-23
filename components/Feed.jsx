import React from 'react';
import Stories from './Stories';

const Feed = () => {
  return (
    <main className="md: max-auto grid max-w-3xl grid-cols-1 md:grid-cols-2 xl:max-w-6xl xl:grid-cols-3">
      <section className="col-span-2">
        <Stories />
      </section>
      <section></section>
    </main>
  );
};

export default Feed;
