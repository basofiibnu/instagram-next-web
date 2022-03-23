import {
  collection,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore';
import React, { useState, useEffect, Fragment } from 'react';
import { db } from '../firebase';
import Post from './Post';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
        (snapshot) => {
          setPosts(snapshot.docs);
        },
      ),
    [db],
  );

  console.log(posts, 'posts');

  return (
    <div>
      {posts.map((post) => (
        <Fragment>
          {console.log(post.data())}
          <Post
            key={post.id}
            username={post.data().username}
            userImg={post.data().profileImg}
            img={post.data().image}
            caption={post.data().caption}
          />
        </Fragment>
      ))}
    </div>
  );
};

export default Posts;
