import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdFingerprint } from 'react-icons/md'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Button } from './pages/Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib'


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
                <MdFingerprint className='navbar-icon' /> Logo
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}               
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/About' className="nav-links" onClick={closeMobileMenu}>
                        About
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Products' className="nav-links" onClick={closeMobileMenu}>
                        Products
                    </Link>
                </li>
                <l className="nav-btn">
                    {button ? (
                        <Link to='/' className="btn-link">
                            <Button buttonStyle='btn--outline'>SIGNUP</Button>
                        </Link>
                    ) : (
                        <Link to='/' className='btn-link' onClick={closeMobileMenu}>
                            <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>Outline</Button>
                        </Link>
                    )
                }
                </l>
            </ul>
            </div>  
        </div>  
        </IconContext.Provider>
    </>
  )
}

export default Navbar;