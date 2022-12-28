import Logo from '../assets/logo.png';
import CartWidget from './CartWidget';

const Navbar = () => {

    return (
        <div>
            <nav className="navbar bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="./index.html">
                <img src={Logo} alt="La Madriguera"  style={{ width: '30px', height: '24px', margin: '15px' }} />
                La Madriguera
              </a>
              <ul className='d-flex'>
                <li className=''>Inicio</li>
                <li className=''>Tienda</li>
                <li className=''>Contacto</li>

                
            </ul>
            <div className="d-flex">
             <CartWidget />
            </div>
              
            </div>
          </nav>
        </div>
    )
}

export default Navbar;