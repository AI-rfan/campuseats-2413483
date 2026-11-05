import { useCart } from '../hooks/useCart.js'
import { NavLink } from 'react-router'

function Header() {
  const { count, favourites } = useCart()

  return (
    <header className="header">
      <NavLink to="/" end className="logo-link">
        <h1 className="logo">CampusEats</h1>
      </NavLink>
      <nav className="nav">
        <NavLink to="/" end className="link">Vendors</NavLink>
        <NavLink to="/favourites" className="link">
          Favourites <span className="badge">{favourites.length}</span>
        </NavLink>
        <NavLink to="/cart" className="link cart">
          Cart <span className="badge">{count}</span>
        </NavLink>
        <NavLink to="/orders" className="link">Orders</NavLink>
      </nav>
    </header>
  )
}

export default Header
