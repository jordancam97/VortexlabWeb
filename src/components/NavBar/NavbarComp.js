import React, { useEffect, useState} from 'react';
import { NavLink, Route, Link } from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './../../components/mobile/mobile.styles.css';
import './NavBar.css'
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

export default function NavbarComp() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }
  const closeMenu = () => {
    setNavbarOpen(false)
  }
    return (
      <nav className="navBar">
        <button onClick={handleToggle}>{navbarOpen ?  (
          <MdClose style={{color: "#1ae6ee", width: "20px", height: "20px" }} />
          ) : (
          <FiMenu style={{ color: "#1ae6ee", width: "20px", height: "20px" }} />
          )}
          </button>
          <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
            <a href='#threePage'><li className='items textColorCian'>Nuestra Empresa</li></a><br/>
            <a href='#sevenPage'><li className='items textColorCian'>Nuestros Servicios</li></a><br/>
            <a href='#twelvePage'><li className='items textColorCian'>Algunos Conceptos</li></a><br/>
            <a href='#thirteenPage'><li className='items textColorCian'>Contacto</li></a>
          </ul>
      </nav>
    )

}
