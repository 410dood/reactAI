import React from 'react';
import Tilt from 'react-tilt';
import hotdog from './hotdognothotdog.png';

const Hotdog = () => {
    return (
        <div className=''>
            <Tilt
                className=""
                options={{
                    max: 5
                }}
                style={{
                    height: 150,
                    width: 150
                }}>
                <div className="Tilt-inner">
                    <img src={hotdog} alt='hotdog logo' />
                </div>
            </Tilt>
        </div>
    );
};

export default Hotdog;
