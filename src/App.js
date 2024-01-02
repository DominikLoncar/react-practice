import { useState } from 'react';
import './App.css';

function SomeText({p1, p2}) {
  return (
    <div>
      <p>{p1}</p>
      <p>{p2}</p>
    </div>
    )
}

function App() {

  const [p1, setP1] = useState("Some p1 text...");

  return (
    <div className="App">
      <p>Paragraph before.</p>    
      <p onClick={() => setP1("Updated p1 text.")}> {p1} </p>  
    </div>
  );
}

export default App;
