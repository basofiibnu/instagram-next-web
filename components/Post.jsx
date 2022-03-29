import React, { useState, useEffect } from 'react';
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline';
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid';
import { useSession } from 'next-auth/react';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore';
import { db } from '../firebase';
import Moment from 'react-moment';

const Post = ({ id, username, userImg, img, caption }) => {
  const { data: session } = useSession();
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);

  const sendComment = async (e) => {
    e.preventDefault();

    const commentToSend = comment;
    setComment('');

    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  };

  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc(
        doc(db, 'posts', id, 'likes', session.user.uid),
      );
    } else {
      await setDoc(doc(db, 'posts', id, 'likes', session.user.uid), {
        username: session.user.username,
      });
    }
  };

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, 'posts', id, 'comments'),
          orderBy('timestamp', 'desc'),
        ),
        (snapshot) => setComments(snapshot.docs),
      ),
    [db, id],
  );

  useEffect(
    () =>
      onSnapshot(collection(db, 'posts', id, 'likes'), (snapshot) => {
        setLikes(snapshot.docs);
      }),
    [db, id],
  );

  useEffect(
    () =>
      setHasLiked(
        likes.findIndex((like) => like.id === session?.user?.uid) !==
          -1,
      ),
    [likes],
  );

  return (
    <div className="my-7 rounded-sm border bg-white">
      <div className="flex items-center p-5">
        <img
          src={userImg}
          alt="user-profile-pic"
          className="mr-3 h-12 w-12 rounded-full border object-contain p-1"
        />
        <p className="flex-1 font-semibold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      <img
        src={img}
        alt="posts-pic"
        className="w-full object-cover"
      />
      {session && (
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4">
            {hasLiked ? (
              <HeartIconFilled
                onClick={likePost}
                className="btn text-red-500"
              />
            ) : (
              <HeartIcon onClick={likePost} className="btn" />
            )}
            <ChatIcon className="btn" />
            <PaperAirplaneIcon className="btn rotate-45" />
          </div>
          <BookmarkIcon className="btn" />
        </div>
      )}
      <p className="truncate px-5 py-3 pb-1">
        {likes.length > 0 && (
          <p className="text-md font-semibold">
            {likes.length} likes
          </p>
        )}
        <span className="mr-1 font-semibold">{username}</span>
        {caption}
      </p>
      <p className="ml-5 mb-1 text-sm text-gray-500">
        View all comments
      </p>
      {comments.length > 0 && (
        <div className="ml-5 mr-5 h-auto overflow-y-scroll scrollbar-track-gray-100 scrollbar-thumb-gray-700">
          {comments.map((commentData) => (
            <div
              key={commentData.id}
              className="flex items-center justify-between space-x-2"
            >
              {/* <img
                src={commentData.data().userImage}
                alt="comment-pic"
                className="h-7 rounded-full"
              /> */}
              <p className="text-sm">
                <span className="font-semibold">
                  {commentData.data().username}
                </span>{' '}
                {commentData.data().comment}
              </p>
              {/* <Moment fromNow className="pr-5 text-xs">
                {commentData.data().timestamp?.toDate()}
              </Moment> */}
              <HeartIcon
                onClick={likePost}
                className="btn mr-5 text-gray-300"
                style={{ width: 20 }}
              />
            </div>
          ))}
        </div>
      )}

      {session && (
        <form className="flex items-center px-4 pb-4 pt-1">
          <EmojiHappyIcon className="h-7" />
          <input
            type="text"
            name="comment"
            id="comment"
            placeholder="Add a comment..."
            className="flex-1 border-none outline-none focus:ring-0"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            type="submit"
            disabled={!comment.trim()}
            onClick={sendComment}
            className="cursor-pointer font-semibold text-blue-400"
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
};

export default Post;
