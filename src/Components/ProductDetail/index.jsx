import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { CartContext } from "../../Context";
import "./styles.css";
const ProductDetail = () => {
  const { isDetailOpen, productToShow, closeDetail } = useContext(CartContext);

  return (
    <aside
      className={`${
        isDetailOpen ? "flex" : "hidden"
      } product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <XMarkIcon
          className="w-6 h-6 text-black-600 cursor-pointer"
          onClick={closeDetail}
        ></XMarkIcon>
      </div>
      <figure className="px-6">
        <img
          className="rounded"
          src={productToShow.images ? productToShow.images[0] : ""}
          alt={productToShow.title}
        />
        <p className="flex flex-col p-6">
          <span className="font-medium text-2xl mb-2 flex items-center gap-1">
            <CurrencyDollarIcon className="h-6 w-6 text-black-500"></CurrencyDollarIcon>
            {productToShow.price}
          </span>
          <span className="font-medium text-md">{productToShow.title}</span>
          <span className="font-light text-sm">
            {productToShow.description}
          </span>
        </p>
      </figure>
    </aside>
  );
};

export default ProductDetail;
