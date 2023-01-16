import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Emmanuel Anokye</title>
        <meta name="description" content="Emmanuel Anokye's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Emmanuel Anokye</h1>
        <p>
          I am very interested in software development and healthcare technology
        </p>
      </main>
    </>
  );
}
