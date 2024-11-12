import { NavLink } from "react-router-dom"

function Header() {
    return (
    <nav className="max-w-screen-lg m-auto my-4 grid grid-cols-4 font-saira font-bold text-3xl text-center">
        <NavLink to="/" className="nav-item">HOME</NavLink>
        <NavLink to="/benefits" className="nav-item pr-4">BENEFITS</NavLink>
        <NavLink to="/services" className="nav-item">SERVICES</NavLink>
        <NavLink to="/contact" className="nav-item">CONTACT</NavLink>
    </nav>
    )
}

export default Header