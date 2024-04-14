import { Layout } from "../../Components/Layout";
import { Card } from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import { useContext } from "react";
import { CartContext } from "../../Context/index.jsx";

const Home = () => {
  const { loading, error, itemsByTitle, handleChange, filteredItems } =
    useContext(CartContext);
  return (
    <Layout>
      <h1 className="text-black font-bold text-xl m-4"> Home </h1>
      <input
        value={itemsByTitle}
        onChange={handleChange}
        type="text"
        placeholder="Search a product by..."
        className="rounded-lg border border-black w-80 mb-4 p-4 focus:outline-none"
      />
      {error && <p> Error: {error} </p>}
      {loading && <p>Cargando</p>}
      {filteredItems?.length > 0 ? (
        <div className="grid grid-cols-4 gap-4 w-full max-w-screen-lg">
          {filteredItems?.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      ) : (
        <div className="text-black font-bold text-4xl m-4 flex h-80 items-center">
          Product Not Found
        </div>
      )}
      <ProductDetail />
    </Layout>
  );
};

export { Home };
