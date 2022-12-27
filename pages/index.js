import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja list | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          asdasdasdasdasdasdasdasdasd.asdasdasdasdasd
          asdasdasdasdasd.asdasdasdasdwrtertertertert.ert
        </p>
        <Link href="/ninjas" className={styles.btn}>
          See ninja Listing
        </Link>
      </div>
    </>
  );
}
