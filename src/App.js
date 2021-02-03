import React from 'react';
import Cube from './components/cube';
import Panel from './components/panel';
import Title from './components/title';

const App = () => {
  return(
    <div className="container">
      <Title 
          title="RETRO BASS DROP"
      />
      <Cube />
      <Panel />
    </div>
  );
};


export default App;
