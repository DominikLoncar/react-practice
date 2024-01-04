import { useState, useContext, useRef } from 'react';
import { userNameContext } from './components/Contexts';
import SayBye from './components/SayBye';
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

// Greet, context, pass username

function App() {



  const [p1, setP1] = useState(0);

  return (
    <div className="App">
      <userNameContext.Provider value={"Dom"}>
        <Greet />
      </userNameContext.Provider>

      <p>Paragraph before.</p>    
      <p onClick={() => setP1(p1+1)}> {`Clicked ${p1} times.`} </p>  
      <SomeText p1={p1} style={{backgroundColor: "black", color: "white", paddingTop: "20px", paddingBottom: "20px"}} />
      <RefExample />
      <RefExample />
    </div>
  );
}


const Greet = () => {
  const userName = useContext(userNameContext);
  return (<>
    <h1>Hi {userName}</h1>
    <SayBye />
  </>);
}

const RefExample = () => {
  let count = useRef(0);
  const handleIncrement = () => {
    count.current++
    console.log(`Count: ${count.current}`);
  }

  return (<h3 onClick={handleIncrement}>Ref example.</h3>)
}


export default App;
