
import './App.css';
import Hello from './components/class component/Hello';


import ParentComponent from './components/functional component/ParentComponent';

function App() {
  return (
    <div className="App">
    <h1>Welocome to component topic</h1>
  <Hello/>
   
    <ParentComponent/>
    </div>
  );
}

export default App;
