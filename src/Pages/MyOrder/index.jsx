import { useContext } from "react";
import { CartContext } from "../../Context";
import { Layout } from "../../Components/Layout";
import OrderCard from "../../Components/OrderCard";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

const MyOrder = () => {
  const { order } = useContext(CartContext);
  const currentPath = window.location.pathname
  let orderId= currentPath.split('/')[2];
  console.log(orderId);
  if (orderId === 'last') orderId = order?.length -1;

  return (
    <Layout>
      <div className="flex items-center justify-center w-80 relative mb-6">
        <Link className="absolute left-0" to={"/my-orders"}>
          <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer"></ChevronLeftIcon>
        </Link>
        <h1 className="text-black font-bold text-xl m-4"> My Order </h1>
      </div>

      <div className="flex flex-col w-80">
        {order?.at(-1).products.map((product) => (
          <OrderCard key={product.id} {...product} />
        ))}
      </div>
    </Layout>
  );
};

export { MyOrder };
