import React, { Fragment } from 'react';
import Image from 'next/image';
import { HomeIcon } from '@heroicons/react/solid';
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

const Header = () => {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-5 flex max-w-6xl justify-between bg-white lg:mx-auto">
        <div
          onClick={() => router.push('/')}
          className="relative hidden w-24 cursor-pointer lg:inline-grid"
        >
          <Image
            src={
              'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2880px-Instagram_logo.svg.png'
            }
            layout="fill"
            objectFit="contain"
            alt="logo-pic"
          />
        </div>
        <div
          onClick={() => router.push('/')}
          className="relative w-10 flex-shrink-0 cursor-pointer lg:hidden"
        >
          <Image
            src={
              'https://1000logos.net/wp-content/uploads/2017/02/insta-logo.png'
            }
            layout="fill"
            objectFit="contain"
            alt="logo-pic"
          />
        </div>
        <div className="max-w-xs">
          <div className="relative mt-1 rounded-md p-3">
            <div className="pointer-events-none absolute inset-y-0 flex items-center pl-3">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="block w-full rounded-md border-gray-300 bg-gray-50 pl-10 focus:border-black focus:ring-black sm:text-sm"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon
            onClick={() => router.push('/')}
            className="navBtn"
          />
          <MenuIcon className="h-6 cursor-pointer md:hidden" />

          {session ? (
            <Fragment>
              <div className="navBtn relative">
                <PaperAirplaneIcon className="navBtn rotate-45" />
                <div className="absolute -top-1 -right-2 flex h-5 w-5 animate-pulse items-center justify-center rounded-full bg-red-500 text-xs text-white">
                  3
                </div>
              </div>
              <PlusCircleIcon className="navBtn" />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />
              <img
                onClick={signOut}
                src={
                  session.user.image ||
                  'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png'
                }
                alt="ava-pic"
                className="h-10 w-10 cursor-pointer rounded-full object-cover"
              />
            </Fragment>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
