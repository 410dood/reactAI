import React from 'react';
import Tilt from 'react-tilt';
import './logo.css';
import hdwlogo from './hdwlogo.png';

const Logo = () => {
  return (
    <div className='ma4 mt0 center'>
      <Tilt
        className="Tilt br2 shadow-2"
        options={{
        max: 55
      }}
        style={{
        height: 190,
        width: 190
      }}>
        <div className="Tilt-inner pa3">
          <img src={hdwlogo} alt='heavydoodyworksai logo'/>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
