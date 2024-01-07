import { createContext } from "react";
import { PropTypes } from "prop-types";
const CartContext = createContext();

const CartProvider = ({children}) => {
    return(
        <CartContext.Provider >
            {children}
        </CartContext.Provider>
    )
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  

export { CartContext, CartProvider };
