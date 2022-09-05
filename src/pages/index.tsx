import Head from 'next/head';
import Test from '@components/Test';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>쿠팡!</title>
      </Head>
      <div>home page</div>
      <Test />
    </>
  );
};

export default HomePage;
