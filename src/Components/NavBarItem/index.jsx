import { NavLink } from "react-router-dom";


const NavBarItem = ({ liClassName, path, text, stylesNavLink }) => {

  const {
    pendingStyle = '' , 
    activeStyle = 'underline underline-offset-4', 
    transitioningStyle = ''
  } = stylesNavLink;

  const toggle =({ isActive, isPending, isTransitioning }) =>
  [
    isPending ? pendingStyle : "",
    isActive ? activeStyle : "",
    isTransitioning ? transitioningStyle : "",
  ].join(" ")

    return(
      <li className={`${liClassName}`}>
        <NavLink to={path} className={toggle}>
          {text}
        </NavLink>
      </li>    
    );
}

export { NavBarItem };