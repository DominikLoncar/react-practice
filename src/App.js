import { useState } from 'react';
import './App.css';

function SomeText({p1, p2="p2", style={}}) {
  return (
    <div style={style}>
      <p>{p1}</p>
      <p>{p2}</p>
    </div>
    )
}

function App() {

  const [p1, setP1] = useState(0);

  return (
    <div className="App">
      <p>Paragraph before.</p>    
      <p onClick={() => setP1(p1+1)}> {`Clicked ${p1} times.`} </p>  
      <p onClick={() => setP1(p1+1)}> {`Clicked ${p1} times.`} </p>  
      <p onClick={() => setP1(p1+1)}> {`Clicked ${p1} times.`} </p>  
      <SomeText p1={p1} style={{backgroundColor: "black", color: "white", paddingTop: "20px", paddingBottom: "20px"}} />
    </div>
  );
}

export default App;
