import React from 'react';
import Cube from './components/cube';
import Footer from './components/footer';
import Title from './components/title';

const App = () => {
  return(
    <div className="container">
      <Title 
          title="RETRO BASS TRAP"
      />
      
      <Cube />

      
      {/* Props children*/}
      <Footer>LUISPROOC 💙 </Footer>
    </div>
  );
};


export default App;
