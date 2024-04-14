import { useContext } from "react";
import { Layout } from "../../Components/Layout";
import OrdersCard from "../../Components/OrdersCard";
import { CartContext } from "../../Context";
import { Link } from "react-router-dom";


const MyOrders = () => {
  const { order } = useContext(CartContext);
  return (
    <Layout>
      <div className="flex items-center justify-center w-80 relative">
        
        <h1 className="text-black font-bold text-xl m-4"> My Orders </h1>
      </div>
      {order.map((order) => (
        <Link key={order.id} to={`/my-orders/${order.id}`}>
          <OrdersCard
            totalProducts={order.totalProducts}
            totalPrice={order.totalPrice}
          />
        </Link>
      ))}
    </Layout>
  );
};

export { MyOrders };
