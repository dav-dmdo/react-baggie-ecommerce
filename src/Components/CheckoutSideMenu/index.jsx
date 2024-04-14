import { useContext } from "react";
import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { CartContext } from "../../Context";
import OrderCard from "../OrderCard";
import { calculateTotal } from "../../Utils";
import "./styles.css";
const CheckoutSideMenu = () => {
  const {
    isCheckoutSideMenu,
    closeCheckoutSideMenu,
    cartProducts,
    setCartProducts,
    order,
    setOrder,
  } = useContext(CartContext);

  const handleDelete = (id) => {
    const newCartProducts = cartProducts.filter((product) => product.id !== id);
    setCartProducts(newCartProducts);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: "01.02.2024",
      products: [...cartProducts],
      totalProducts: cartProducts.length,
      totalPrice: calculateTotal(cartProducts),
      id: order.length
    };

    setOrder([...order, orderToAdd]);
    setCartProducts([]);
  };

  return (
    <aside
      className={`${
        isCheckoutSideMenu ? "flex" : "hidden"
      } checkout-side-menu flex flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <XMarkIcon
          className="w-6 h-6 text-black-600 cursor-pointer"
          onClick={closeCheckoutSideMenu}
        ></XMarkIcon>
      </div>
      <div className="px-6 overflow-y-scroll flex-1">
        {cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            {...product}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="px-6 mb-6">
        <p className="flex items-center justify-between mb-2">
          <span className="font-light">Total: </span>
          <span className="font-medium text-2xl">
            ${calculateTotal(cartProducts)}
          </span>
        </p>
        <Link to={'/my-orders/last'}>
          <button
            className="bg-black w-full py-3 text-white rounded-lg text-lg"
            onClick={() => handleCheckout()}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
