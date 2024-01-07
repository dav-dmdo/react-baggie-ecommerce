import { useRoutes, BrowserRouter } from "react-router-dom";
import { CartContext, CartProvider } from "../../Context";
import { Home } from "../Home";
import { MyAccount } from "../MyAccount";
import { MyOrder } from "../MyOrder";
import { MyOrders } from "../MyOrders";
import { NotFound } from "../NotFound";
import { SignIn } from "../SignIn";
import { Navbar } from "../../Components/Navbar";

import "./App.css";
import { useContext } from "react";

const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/*", element: <NotFound /> },
  ]);

  return routes;
};
const App = () => {
  const context = useContext(CartContext);
  return (
    <CartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
