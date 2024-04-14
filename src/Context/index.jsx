import { createContext, useEffect, useState } from "react";
import { useFetch } from "../Hooks/useFetch";
import { useTextInput } from "../Hooks/useTextInput";
const CartContext = createContext();

const CartProvider = ({ children }) => {
  // Shopping Cart · Count
  const [count, setCount] = useState(0);

  // Shopping Cart · Cart products / Add products to cart
  const [cartProducts, setCartProducts] = useState([]);

  // Product Detail · Show product
  const [productToShow, setProductToShow] = useState({});

  // Detail · Open/Close
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const openDetail = () => setIsDetailOpen(true);
  const closeDetail = () => setIsDetailOpen(false);

  // Checkout Side Menu · Open/Close
  const [isCheckoutSideMenu, setIsCheckoutSideMenu] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenu(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenu(false);

  //Shopping Cart · Order
  const [order, setOrder] = useState([]);

  // Home · Get products
  const urlAPI = "https://api.escuelajs.co/api/v1/products";
  const { items, loading, error } = useFetch([], urlAPI);
  const [filteredItems, setFilteredItems] = useState(null);

  const {
    value: itemsByTitle,
    setValue: setItemsByTitle,
    handleChange,
  } = useTextInput();

  const [itemsByCategory, setItemsByCategory] = useState("");

  const searchItemsByTitle = (items, itemsByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(itemsByTitle.toLowerCase())
    );
  };

  const searchItemsByCategory = () => {
    return items?.filter((item) =>
      item.category.toLowerCase().includes(itemsByCategory.toLowerCase())
    );
  };
  console.log("search by cat ", itemsByCategory);

  useEffect(() => {
    setFilteredItems(items);
  }, [items]);

  useEffect(() => {
    if (itemsByTitle) setFilteredItems(searchItemsByTitle(items, itemsByTitle));
  }, [items, itemsByTitle]);

  return (
    <CartContext.Provider
      value={{
        count,
        setCount,
        cartProducts,
        setCartProducts,
        isDetailOpen,
        openDetail,
        closeDetail,
        isCheckoutSideMenu,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        productToShow,
        setProductToShow,
        order,
        setOrder,
        items,
        loading,
        error,
        itemsByTitle,
        setItemsByTitle,
        handleChange,
        filteredItems,
        setFilteredItems,
        //itemsByCategory,
        setItemsByCategory,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
