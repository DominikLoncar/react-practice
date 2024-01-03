import { useState, useEffect } from 'react';
import './App.css';

// Double the input

function SomeText({style={}}) {
  
  const [count, setCount] = useState(2);

  const handleDoubling = () => setCount(c => c*2);
  const handleInputChange = e => setCount(e.target.value*2);

  return (
    <div style={style}>
      <p onClick={handleDoubling}>Double the input! <b>{count}</b></p>
      <input 
        id='number'
        type='number'
        onChange={handleInputChange}
        value={count}
      />
    </div>
    )
}

function App() {

  const [p1, setP1] = useState(0);

  return (
    <div className="App">
      <p>Paragraph before.</p>    
      <p onClick={() => setP1(p1+1)}> {`Clicked ${p1} times.`} </p>  
      <SomeText p1={p1} style={{backgroundColor: "black", color: "white", paddingTop: "20px", paddingBottom: "20px"}} />
    </div>
  );
}

export default App;
