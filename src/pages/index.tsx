import { Button } from "@mantine/core";
import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pokemon List</title>
        <meta name="description" content="Pokemon App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Button color="lime">Settings</Button>
      </main>
    </>
  );
};

export default Home;
