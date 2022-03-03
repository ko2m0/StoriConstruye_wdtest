import React from 'react';
import { Link } from 'react-router-dom';
import { FaFire } from 'react-icons/fa';
import { Button } from './pages/Button';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import './Pricing.css';

function Pricing() {
    return (
      <IconContext.Provider value={{ color: '#fff', size: 64 }}>
        <div className='pricing__section'>
          <div className='pricing__wrapper'>
            <h1 className='pricing__heading k-padding-small trescolor-txt'>Aumenta tu línea de crédito en 3 meses!</h1>
            <div className='pricing__container'>
              <Link to='/sign-up' className='pricing__container-card'>
                <div className='pricing__container-cardInfo'>
                  <div className='icon'>
                    <FaFire />
                  </div>
                  <h3>Aquí empiezas</h3>
                  
                  
                  <ul className='pricing__container-features'>
                    <li>
                      <h3 className='txt-center'>Línea de crédito base</h3></li>
                  </ul>
                </div>
              </Link>
              <Link to='/sign-up' className='pricing__container-card'>
                <div className='pricing__container-cardInfo'>
                  <div className='icon'>
                    <BsXDiamondFill />
                  </div>
                  <h3>Hasta</h3>
                  <h4>$1,500</h4>
                  <ul className='pricing__container-features'>
                    <li>
                      <h3 className='txt-center'>Primer incremento en el tercer mes</h3>
                    </li>
                  </ul>
                </div>
              </Link>
              <Link to='/sign-up' className='pricing__container-card'>
                <div className='pricing__container-cardInfo'>
                  <div className='icon'>
                    <GiCrystalize />
                  </div>
                  <h3>Hasta</h3>
                  <h4>$3,000</h4>
                  <ul className='pricing__container-features'>
                    <li>
                      <h3 className='txt-center'>
                      Segundo incremento en el sexto mes
                      </h3>
                      </li>
                  </ul>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    );
  }
  export default Pricing;