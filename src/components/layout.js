import Head from "next/head";
import Header from "./Header";
import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Star Wars</title>
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>
    </>
  );
}
