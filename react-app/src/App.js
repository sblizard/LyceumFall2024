import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={`${process.env.PUBLIC_URL}/techx_unc_logo.jpeg`} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Hi! :) How are you? I know I am doing great! :D
        </p>
        <p>
          Via Ad Excellentiam
        </p>
      </header>
    </div>
  );
}

export default App;
