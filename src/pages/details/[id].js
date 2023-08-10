import axios from "axios";
import Layout from "../../components/layout";

export default function Details({ item }) {
  return (
    <Layout>
      <div>
        <h1>{item.title}</h1>
        <p>{item.opening_crawl}</p>
        <p>Director: {item.director}</p>
        <p>Producer: {item.producer}</p>
        <p>Release date: {item.release_date}</p>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await axios.get("https://swapi.dev/api/films");
  const paths = res.data.results.map((film) => {
    const urlParts = film.url.split("/").filter(Boolean);
    const id = urlParts[urlParts.length - 1];

    return {
      params: { id },
    };
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await axios.get(`https://swapi.dev/api/films/${params.id}`);
  const item = res.data;

  return { props: { item } };
}
