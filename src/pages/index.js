import Layout from "../components/layout";
import Link from "next/link";
import axios from "axios";

export default function Index({ items }) {
  return (
    <Layout>
      <h1>List of Items</h1>
      {items.map((item) => (
        <div key={item.id}>
          <Link href={`/details/${item.id}`}>{item.name}</Link>
        </div>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await axios.get("https://swapi.dev/api/films");
  const items = res.data.results.map((item) => {
    const urlParts = item.url.split("/").filter(Boolean);
    const id = urlParts[urlParts.length - 1];

    return {
      id,
      name: item.title,
    };
  });

  return {
    props: { items },
  };
}
