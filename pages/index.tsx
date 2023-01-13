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
        <title>🐰 2023年 あけお 🐰</title>
      </Head>
      <Rabbit />
    </div>
  );
};

export default Home;
