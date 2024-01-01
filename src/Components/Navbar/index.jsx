import { NavLink } from "react-router-dom";


const Navbar = () => {
	const activeStyle = 'underline'
  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
				<li className="font-semibold text-lg">
					<NavLink to= '/'>
						Baggie
					</NavLink>
				</li>
				<li>
					<NavLink to= '/'>
						All
					</NavLink>
				</li>
				<li>
					<NavLink to= '/clothes'>
						Clothes
					</NavLink>
				</li>
				<li>
					<NavLink to= '/electronics'>
						Electronics
					</NavLink>
				</li>
				<li>
					<NavLink to= '/furnitures'>
						Furnitures
					</NavLink>
				</li>
				<li>
					<NavLink to= '/toys'>
						Toys
					</NavLink>
				</li>
				<li>
					<NavLink to= '/others'>
						Others
					</NavLink>
				</li>
			</ul>

      <ul className="flex items-center gap-3">
				<li>
					davila.dmo@gmail.com
				</li>
				<li>
					<NavLink to= '/my-orders'>
						My Orders
					</NavLink>
				</li>
				<li>
					<NavLink to= '/my-account'>
						My Account
					</NavLink>
				</li>
				<li>
					<NavLink to= '/sign-in'>
						Sign In
					</NavLink>
				</li>
				<li>
					<NavLink to= '/cart'>
						Cart 0
					</NavLink>
				</li>
			</ul>
    </nav>
  );
};

export { Navbar };