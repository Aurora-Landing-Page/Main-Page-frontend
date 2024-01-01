import React from 'react'
import Navbar from '../Navbar/Navbar';

const Pronites2 = () => {
  const myStyle = {
    height: '100vh',
  };
  return (
    <div style={myStyle}>
      <Navbar />
      <iframe
        title="ExternalHTML"
        src="./PronitesPage/index6.html"
        width="100%"
        height="100%"
        frameBorder="0"
      />
    </div>

  );
}

export default Pronites2
