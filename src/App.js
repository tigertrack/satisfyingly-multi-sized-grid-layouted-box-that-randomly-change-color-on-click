import './App.css';
import { useState } from 'react';
function App() {

  // color reference taken from the sample layout image
  const [colors, setColors] = useState([
    '#0089e0', '#e53458', '#8c7a5b', '#b85e61', '#7f00cb', '#00b19f', '#007a67', '#6953fe', '#475c6d'
  ])

  const randColor = () => {
    setColors([...colors.sort(() => Math.random() - 0.5)])
  }
  return (
    <div className='grid-container'>
     
        {colors.map((item, index) => (
          <div className="grid-item" style={{backgroundColor: `${item}`}} onClick={randColor}>{index+1}</div>
        ))}

    </div>
  );
}

export default App;
