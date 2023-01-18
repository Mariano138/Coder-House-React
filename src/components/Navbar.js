// import Logo from '../assets/logo.png';
// import CartWidget from './CartWidget';

// const Navbar = () => {

//   return (
//     <div>
//       <nav className="navbar bg-light">
//         <div className="container-fluid text-center">
//           <div className="row align-items-center">
//             <div className="col-12 navbar__row">
//               <div className="col-12">
//                 <a className="navbar-brand" href="./index.html">
//                   <img src={Logo} alt="La Madriguera" style={{ width: '30px', height: '24px', margin: '15px' }} />
//                   La Madriguera
//                 </a>
//               </div>
//               <div className="col-12">
//                 <ul className='navbar__list'>
//                   <li className=''>Inicio</li>
//                   <li className=''>Tienda</li>
//                   <li className=''>Contacto</li>
//                 </ul>
//               </div>
//               <div className="col-12">
//                 <div className="d-flex">
//                   <CartWidget />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   )
// }

// export default Navbar;

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/logo.png';
import CartWidget from './CartWidget';
import { NavLink, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  const navigate = useNavigate()

  return (
    <div className="Navbar">
      <div className="container">
        <div className="row">
          <div className="col"><img src={Logo} alt="La Madriguera" style={{ width: '30px', height: '24px', margin: '15px' }} /></div>
          <div className="col d-flex justify-content-center">
            <ul className='navbar__list'>
              <NavLink to={`/categoria/conejos`} className='m-5'>Conejos</NavLink>
              <NavLink to={`/categoria/cerdos`} className='m-5'>Cerdos</NavLink>
              <NavLink to={`/categoria/chivos`} className='m-5'>Chivos</NavLink>
              <NavLink to={`/categoria/pollos`} className='m-5'>Pollos</NavLink>
            </ul>
          </div>
          <div className="col d-flex justify-content-end mt-2"><CartWidget /></div>
        </div>
      </div>


    </div>
  )
}

export default Navbar;

/* <div>
                {/* <img onClick={() => navigate('/')} src={Logo} alt="La madriguera" style={{ width: '70px', margin: '15px' }}/>
            </div>

             Menú 
            <ul className='hidden md:flex text-[17px] gap-7'>
                <NavLink to={`/categoria/mantenimiento`} className='hover:text-sky-300 duration-300'>Mantenimiento</NavLink>
                <NavLink to={`/categoria/armado`} className='hover:text-sky-300 duration-300'>Armado</NavLink>
                <NavLink to={`/categoria/componentes`} className='hover:text-sky-300 duration-300'>Componentes</NavLink>
                <NavLink to={`/categoria/sistema`} className='hover:text-sky-300 duration-300'>Sistema Operativo</NavLink>
                <CartWidget />
            </ul> */ 