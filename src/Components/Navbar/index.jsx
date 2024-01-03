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
	{ liClassName: "" , path:'/sign-in' , text: 'Sign In' , stylesNavLink: {}},
	{ liClassName: "" , path:'/cart' , text: 'Cart 0' , stylesNavLink: {}}
]

const Navbar = () => {
	
  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
				{leftUL.map( ({liClassName, path, text, stylesNavLink}) => (
					<NavBarItem 
					key = {text}
					liClassName={liClassName} 
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
			</ul>
    </nav>
  );
};

export { Navbar };