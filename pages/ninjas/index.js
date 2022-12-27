import Link from "next/link";
import Head from "next/head";
import styles from "../../styles/Ninja.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users"),
    data = await res.json();

  return {
    props: { ninjas: data },
  };
};

const Ninjas = ({ ninjas }) => {
  return (
    <>
      <Head>
        <title>Ninja list | Ninjas</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div className="-view">
        <h1>All Ninjas</h1>
        {ninjas.map((ninja) => (
          <div key={ninja.id}>
            <Link className={styles.single} href={"./ninjas/" + ninja.id}>
              <h3>{ninja.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Ninjas;
