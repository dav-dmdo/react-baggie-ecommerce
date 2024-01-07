import { createContext, useState } from "react";
import { PropTypes } from "prop-types";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [count, setCount] = useState(0);

    return(
        <CartContext.Provider value={{
            count, 
            setCount
        }}>
            {children}
        </CartContext.Provider>
    )
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  

export { CartContext, CartProvider };
