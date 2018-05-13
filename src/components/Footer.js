import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className='container'>
          <div className='row text-center'>
            <div>
              <h3 className='lead'></h3>
              <p>
                <a href='https://github.com/410dood/reactAI'>Source Code</a>
                © 2018
                <a href='https://github.com/410dood'>HeavyDoodyWorks</a>.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;