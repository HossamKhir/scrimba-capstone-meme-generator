import React from 'react';
import Header from './Header';
import MemeGenerator from './MemeGenerator';

const App = (props) => (
  <div>
    <Header {...props}/>
    <MemeGenerator {...props}/>
  </div>
);

export default App;
