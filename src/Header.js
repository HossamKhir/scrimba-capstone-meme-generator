import React from 'react';

const Header = (props) => (
  <header>
    <img
      src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
      alt={props.toString()}
    /><p>Meme Generator</p>
  </header>
);

export default Header;
