import './App.css';

function SomeText() {
  return (
    <div>
      <p>p1</p>
      <p>p2</p>
    </div>
    )
}

function App() {
  return (
    <div className="App">
      <p>Paragraph before.</p>    
      <SomeText />  
    </div>
  );
}

export default App;
