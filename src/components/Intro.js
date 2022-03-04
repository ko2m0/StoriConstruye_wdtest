import React from 'react';
import '../App.css';
import { Button } from './pages/Button';
import './Intro.css'
import StoriLogo from './StoriLogo';
import { Link } from 'react-router-dom';
import CoverImgs from './CoverImgs';


function Intro() {
return (
<div className='hero-container'>
    <video src='/videos/video-1.mp4' autoPlay loop muted />
    <div className="k-block clearfix">
        <div className="[ zeb-1 zeb-m-12 ]">&nbsp;</div>
        <div className="[ zeb-10 zeb-m-12 ]">
            <div className="[ zeb-12 zeb-m-12 ] flexxer align-center just-center wrapit">
                <div className="[ zeb-6 zeb-m-12] flexxer align-center just-center intro-text">
                    <div className="k-panel">
                        <img src={StoriLogo.logoConstruye} />
                        <h1 className='albus-txt txt-huge'>Una tarjeta para ti!</h1>
                        <h2 className='k-padding-small albus-txt'>
                        Aumenta tu línea de crédito en sólo 3 meses</h2>
                        <Link to='/'>
                            <Button buttonSize='btn--wide' buttonColor='blue'>Explícame cómo</Button>
                        </Link>
                        </div>
                    </div>
                <div className="[ zeb-6 zeb-m-12]">
                    <div className="k-panel flexxer align-center just-center">
                        <img src={CoverImgs[0].Img} alt="" />
                        </div>
                    </div>
                </div>

        </div>
        <div className="[ zeb-1 zeb-m-12 ]">&nbsp;</div>
    </div>
</div>
);
}

export default Intro;