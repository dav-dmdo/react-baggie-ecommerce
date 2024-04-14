import { useContext } from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { CartContext } from "../../Context";
import { NavBarItem } from "../NavBarItem";

const baggieLI = { pendingStyle: '' , activeStyle: '', transitioningStyle: ''}

const leftUL = [
	{ liClassName: "font-semibold text-lg" , path: '/' , text: 'Baggie' , stylesNavLink: baggieLI },
	{ liClassName: "" , path:'/' , text: 'All' , stylesNavLink: {}},
	{ liClassName: "" , path:'/clothes' , text: 'Clothes' , stylesNavLink: {}},
	{ liClassName: "" , path:'/electronics' , text: 'Electronics' , stylesNavLink: {}},
	{ liClassName: "" , path:'/furnitures' , text: 'Furnitures' , stylesNavLink: {}},
	{ liClassName: "" , path:'/toys' , text: 'Toys' , stylesNavLink: {}},
	{ liClassName: "" , path:'/others' , text: 'Others' , stylesNavLink: {}}
]

const rightUL = [
	{ liClassName: "" , path:'/my-orders' , text: 'My Orders' , stylesNavLink: {}},
	{ liClassName: "" , path:'/my-account' , text: 'My Account' , stylesNavLink: {}},
	{ liClassName: "" , path:'/sign-in' , text: 'Sign In' , stylesNavLink: {}}
]

const Navbar = () => {
	const { count, setItemsByCategory } = useContext(CartContext);
	
  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white">
      <ul className="flex items-center gap-3">
				{leftUL.map( ({liClassName, path, text, stylesNavLink}) => (
					<NavBarItem 
					key = {text}
					liClassName={liClassName} 
					onClick={() => setItemsByCategory(path.replace("/", ""))}
					path={path} 
					text={text} 
					stylesNavLink={stylesNavLink} />
				)
				)}
			</ul>

      <ul className="flex items-center gap-3">
				<li className="text-black/60">
					davila.dmo@gmail.com
				</li>
				{rightUL.map( ({liClassName, path, text, stylesNavLink}) => (
					<NavBarItem 
					key = {text}
					liClassName={liClassName} 
					path={path} 
					text={text} 
					stylesNavLink={stylesNavLink} />
				)
				)}
				<li className="flex items-center gap-1" >
					<ShoppingBagIcon className="h-6 w-6 "></ShoppingBagIcon>
					<div>{count}</div>
				</li>
			</ul>
    </nav>
  );
};

export { Navbar };