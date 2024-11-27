import './App.css';
import TimerComponent from './components/demos/TimerComponent';
import ControlledInput from './components/demos/ControlledInput';
import UncontrolledInput from './components/demos/UncontrolledInput';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <TimerComponent />
      <ControlledInput />
      <UncontrolledInput />
    </div>
  );
}

export default App;
