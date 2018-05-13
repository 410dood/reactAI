import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className='container'>
          <div className='row text-center'>
            <div>
              <h3 className='lead'></h3>
              <p>HEAVYDOODYWORKS<a href='https://www.heavydoodyworks.com'>Clarifai API</a>.
                <a href='https://github.com/410dood/HeavydoodyAI'>Source Code</a>
                © 2018
                <a href='https://github.com/DrkSephy'>David Leonard</a>.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;