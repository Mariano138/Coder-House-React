
import React, { useState, useContext } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/logo.png';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import '../App.css';

const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  const navigate = useNavigate()
  const { totalQuantity } = useContext(CartContext)

  return (
    <div className="Navbar">
      <div className="container">
        <div className="row">
          <div className="col"><NavLink to={`/`}><img src={Logo} alt="La Madriguera" style={{ width: '30px', height: '24px', margin: '15px' }} /></NavLink></div>
          <div className="col d-flex justify-content-center">
            <ul className='navbar__list p-3 border border-danger-subtle rounded-3'>
              <NavLink to={`/categoria/conejos`} className='m-5 text-dark'>Conejos</NavLink>
              <NavLink to={`/categoria/cerdos`} className='m-5 text-dark'>Cerdos</NavLink>
              <NavLink to={`/categoria/chivos`} className='m-5 text-dark'>Chivos</NavLink>
              <NavLink to={`/categoria/pollos`} className='m-5 text-dark'>Pollos</NavLink>
            </ul>
          </div>
          <div className="col d-flex justify-content-end mt-2"> <CartWidget totalQuantity={totalQuantity} /></div>
        </div>
      </div>


    </div>
  )
}

export default Navbar;

