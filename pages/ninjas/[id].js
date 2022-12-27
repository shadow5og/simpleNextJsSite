const NINJAS_BASE_ENDPOINT = "https://jsonplaceholder.typicode.com/users/";

export const getStaticPaths = async () => {
  const res = await fetch(NINJAS_BASE_ENDPOINT),
    data = await res.json(),
    paths = data.map((ninja) => {
      return {
        params: { id: ninja.id.toString() },
      };
    });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id,
    res = await fetch(NINJAS_BASE_ENDPOINT + id),
    data = await res.json();

  return {
    props: { ninja: data },
  };
};

const Details = ({ ninja }) => {
  return (
    <div>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p>
    </div>
  );
};

export default Details;
