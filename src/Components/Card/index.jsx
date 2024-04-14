import { useContext } from "react";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/outline";
import { CartContext } from "../../Context";

const Card = (data) => {
  const {
    setCount,
    openDetail,
    closeDetail,
    setProductToShow,
    cartProducts,
    setCartProducts,
    openCheckoutSideMenu,
  } = useContext(CartContext);

  const { category, images, title, price } = data.data;

  const showProductDetail = (product) => {
    openDetail();
    setProductToShow(product);
  };

  const addProductToCart = (event, product) => {
    event.stopPropagation();
    setCount((prevCount) => prevCount + 1);
    setCartProducts([...cartProducts, product]);
    openCheckoutSideMenu();
    closeDetail();
  };

  const renderIcon = (id) => {
    const isInCart =
      cartProducts.filter((product) => product.id === id).length > 0;
    if (isInCart) {
      return (
        <div className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1">
          <CheckIcon className="h-6 w-6 text-white "></CheckIcon>
        </div>
      );
    } else {
      return (
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1 hover:bg-cyan-300 active:bg-cyan-500 focus:outline-none focus:ring focus:ring-violet-300"
          onClick={(event) => addProductToCart(event, data.data)}
        >
          <PlusIcon className="h-6 w-6 text-black "></PlusIcon>
        </div>
      );
    }
  };

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => showProductDetail(data.data)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.2">
          {category.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={images[0]}
          alt={title}
        />
        {renderIcon(data.data.id)}
      </figure>

      <p className="flex justify-between">
        <span className="text-sm font-light">{title}</span>
        <span className="text-sm font-medium">${price}</span>
      </p>
    </div>
  );
};

export { Card };
