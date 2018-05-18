import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = (props) => {
  return (
    <div>
      <p className='f3'>
        This magic box will detect the age of Asian's. Because we all know Steve's like 45
      </p>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <input
            onChange={props.onInputChange}
            className='f4 pa2 w-70 center'
            placeholder='ENTER AN IMAGE URL ADDRESS AND PRESS DETECT'
            type='text' />
          <button
            onClick={props.onButtonSubmit}
            className='w-40 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
