import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import hdwlogo from './hdwlogo.png';

const Logo = () => {
    return (
        <div className='left'>
            <Tilt
                className="Tilt br2 shadow-2"
                options={{
                    max: 55
                }}
                style={{
                    height: 50,
                    width: 50
                }}>
                <div className="Tilt-inner pa3">
                    <img src={hdwlogo} alt='heavydoodyworksai logo' />
                </div>
            </Tilt>
        </div>
    );
};

export default Logo;
