import React from 'react';
import Cube from './components/cube';
import Footer from './components/footer';
import Panel from './components/panel';
import Title from './components/title';

const App = () => {
  return(
    <div className="container">
      <Title 
          title="RETRO BASS TRAP"
      />
      <Cube />
      <Panel />
      
      {/* Props children*/}
      <Footer>HOLA </Footer>
    </div>
  );
};


export default App;
