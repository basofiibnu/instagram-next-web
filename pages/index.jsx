import Head from 'next/head';

import Header from '../components/Header';
import Feed from '../components/Feed';

const Home = () => {
  return (
    <div className="scrollbar-hide h-screen overflow-y-scroll bg-gray-50">
      <Head>
        <title>Instagram 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Feed />
    </div>
  );
};

export default Home;
