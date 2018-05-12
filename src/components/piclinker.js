import React from 'react';

const piclinker = ({onInputChange, onButtonSubmit}) => {
    return (
        <div>
            <p className='f3'>
                {'enter image'}
            </p>
            <div className='center'>
                <div className="form center pa4 br3 shadow-5">
                    <input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
                    <button
                        className='w-30 grow f4 link ph3 pv2 dib white bg-green'
                        onClick={onButtonSubmit}>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default piclinker;