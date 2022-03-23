import React from 'react';
import Post from './Post';

const posts = [
  {
    id: '333',
    username: 'kyo',
    userImg: 'https://links.papareact.com/3ke',
    img: 'https://links.papareact.com/3ke',
    caption: 'First Caption 1',
  },
  {
    id: '2',
    username: 'kyo',
    userImg: 'https://links.papareact.com/3ke',
    img: 'https://links.papareact.com/3ke',
    caption: 'First Caption 1',
  },
  {
    id: '5',
    username: 'kyo',
    userImg: 'https://links.papareact.com/3ke',
    img: 'https://links.papareact.com/3ke',
    caption: 'First Caption 1',
  },
];
const Posts = () => {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
};

export default Posts;
