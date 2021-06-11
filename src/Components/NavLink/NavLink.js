import { useLocation, Link } from 'react-router-dom'
export const NavLink = ({ to, className, activeClassName, inActiveClassName, ...rest }) => {
    const location = useLocation();
    let isActive = location.pathname === to;
    let allClassName = className + (isActive ? `${activeClassName}` : `${inActiveClassName}`)
    return <Link to={to} className={allClassName} {...rest} />
}