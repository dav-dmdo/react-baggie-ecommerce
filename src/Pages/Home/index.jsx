import { Layout } from "../../Components/Layout";
import { Card } from "../../Components/Card";

import { useFetch } from "../../Hooks/useFetch.jsx";

const Home = () => {
  const urlAPI = 'https://api.escuelajs.co/api/v1/products'

  const {items, loading, error} = useFetch([], urlAPI);
  console.log(items)
  return (
    <Layout>
      <h1 className="text-black font-bold text-xl m-4"> Home </h1>
      {error && <p> Error: {error} </p>}
      {loading && <p>Cargando</p>}
      <div className="grid grid-cols-4 gap-8 w-full max-w-screen-lg">
        {items?.map(item => (<Card key={item.id} data={item}/>) )}
      </div>
    </Layout>
    );
};

export { Home };
