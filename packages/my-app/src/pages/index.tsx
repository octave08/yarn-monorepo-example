import type { NextPage } from "next";
import Head from "next/head";

import styles from "./home.module.css";

import { Button } from "@octave08/my-ui";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>lerna-nextjs-storybook</title>
      </Head>
      <div>lerna-nextjs-storybook</div>
      <Button data-cy="button" onClick={() => alert("clicked")}>
        Hello World
      </Button>
    </div>
  );
};

export default Home;
