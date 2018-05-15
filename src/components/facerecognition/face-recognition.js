import React from 'react';
import './facerecognition.css';

const FaceRecognition = (props) => {
  return (
    <div className='center ma asian'>
      <div className='absolute mt2'>
        <img
          id='input-image'
          width='500px'
          height='auto'
          alt='Image provided for face recognition'
          src={props.imageURL}/>
        <div
          style={{
          top: props.box.topRow,
          right: props.box.rightCol,
          bottom: props.box.bottomRow,
          left: props.box.leftCol
        }}
          className='bounding-box'></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
