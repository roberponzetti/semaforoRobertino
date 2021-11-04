import logo from './logo.svg';
import './App.css';
import Semaforo from './components/Semaforo';
import { colours } from './data/colours';

function App() {
  return (
    <div className="App">
      <Semaforo colours={colours} />
    </div>
  );
}

export default App;
