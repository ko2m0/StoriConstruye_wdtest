import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Button } from './pages/Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';
import StoriLogo from './StoriLogo';


function Navbar() {

    const [click, setClick] = useState(false);

    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);
    
    const  showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []);
    
    

  return (
    <>
    <IconContext.Provider value={{ color: '#fff'}}>
      <div className="navbar">
        <div className="navbar-container container">
            <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                <img src={StoriLogo.logo} alt="Stori" width="130" />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}               
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                        Nosotros
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/About' className="nav-links" onClick={closeMobileMenu}>
                        Productos
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Products' className="nav-links" onClick={closeMobileMenu}>
                        Pago de Servicios
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Products' className="nav-links" onClick={closeMobileMenu}>
                        Preguntas Frecuentes
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Products' className="nav-links" onClick={closeMobileMenu}>
                        Comunicado de Prensa
                    </Link>
                </li>
                
            </ul>
            </div>  
        </div>  
        </IconContext.Provider>
    </>
  )
}

export default Navbar;