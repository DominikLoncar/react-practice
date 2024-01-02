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
  return (
    <div className="App">
      <p>Paragraph before.</p>    
      <SomeText p1={"p1 text"} p2={"p2 text"} />  
    </div>
  );
}

export default App;
