import faker from '@faker-js/faker';
import React, { useState, useEffect } from 'react';

const Suggestions = () => {
  const [suggestion, setSuggestion] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestion(suggestions);
  }, []);

  return (
    <div className="mt-4 ml-10">
      <div className="mb-5 flex justify-between text-sm">
        <h3 className="text-sm font-bold text-gray-400">
          Suggestion for you
        </h3>
        <button className="font-semibold text-gray-400">
          See All
        </button>
      </div>
      {suggestion.map((profile, i) => (
        <div
          key={i}
          className="mt-3 flex items-center justify-between"
        >
          <img
            src={profile.avatar}
            className="h-10 w-10 rounded-full border p-[2px]"
            alt="suggest-pic"
          />
          <div className="ml-4 flex-1">
            <h2 className="text-sm font-semibold ">
              {profile.username}
            </h2>
            <h3 className="text-xs text-gray-400">
              Works at {profile.company.name}
            </h3>
          </div>
          <button className="text-xs font-bold text-blue-400">
            Follow
          </button>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
