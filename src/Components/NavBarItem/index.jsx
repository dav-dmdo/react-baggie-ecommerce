
import { PropTypes } from 'prop-types';
import { NavLink } from "react-router-dom";


const NavBarItem = ({ liClassName, path, text, stylesNavLink }) => {
  
  NavBarItem.propTypes = {
    liClassName: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    stylesNavLink: PropTypes.json
  }

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
      <li className={` ${liClassName}`}>
        <NavLink to={path} className={toggle}>
          {text}
        </NavLink>
      </li>    
    );
}

export { NavBarItem };