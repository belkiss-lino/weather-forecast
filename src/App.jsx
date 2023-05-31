import './App.css';
import InputCity from './components/InputCity';
import Capital from './components/Capital';

function App() {
  return (
      <div className="App">
        <div  className='Container'>
          <div>
              <h1>Previsão do tempo</h1>
          </div>
          <InputCity />
        </div>

      </div> 
  );
}

export default App;
