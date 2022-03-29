import React, { useEffect, useState } from 'react';
import faker from '@faker-js/faker';

import Story from './Story';
import { useSession } from 'next-auth/react';

const Stories = () => {
  const [suggestions, setSuggestions] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    const suggestionsData = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    setSuggestions(suggestionsData);
  }, []);

  return (
    <div className="mt-8 flex gap-1 space-x-2 overflow-x-scroll rounded-sm border border-gray-200 bg-white p-6 scrollbar-track-gray-100 scrollbar-thumb-gray-700">
      {session && (
        <Story
          img={session.user.image}
          username={session.user.username}
        />
      )}
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
};

export default Stories;
