import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const Navbar = () => {
  const navigate = useNavigate()
  const auth = useContext(AuthContext)
  const logoutHandler = (event) => {
    event.preventDefault()
    auth.logout()
    navigate('/')
  }
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          Logo
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/create">Создать</NavLink>
          </li>
          <li>
            <NavLink to="/links">Ссылки</NavLink>
          </li>
          <li>
            <a href="/" onClick={logoutHandler}>
              Выйти
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
