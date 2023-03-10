import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";

const Rabbit = dynamic(() => import("../components/Rabbit"), {
  ssr: false,
  loading: () => <div>loading...</div>,
});

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>๐ฐ 2023ๅนด ใใใ ๐ฐ</title>
      </Head>
      <Rabbit />
    </div>
  );
};

export default Home;
