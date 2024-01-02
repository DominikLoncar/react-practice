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

  const [p1, setP1] = useState(0);

  return (
    <div className="App">
      <p>Paragraph before.</p>    
      <p onClick={() => setP1(p1+1)}> {`Clicked ${p1} times.`} </p>  
    </div>
  );
}

export default App;
