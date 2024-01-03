import { useState, Suspense, useEffect } from 'react';
import './App.css';


function SomeText({p1, p2="p2", style={}}) {
  
  return (
    <div style={style}>
      <p>Double it! {p1}</p>
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

      <Suspense fallback={<Loading />}>
        <SomeText p1={p1} style={{backgroundColor: "black", color: "white", paddingTop: "20px", paddingBottom: "20px"}} />
      </Suspense>
    </div>
  );
}

const Loading = () => {
    return <div>Loading...</div>
}

export default App;
