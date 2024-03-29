import logo from './holberton.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <h1>
        School dashboard
        </h1>
      </header>
      <body className="App-body">
      <p>Login to access the full dashboard</p>
      <label htmlFor="email"> Email:</label>
        <input type="text" id="email" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />

        <button>OK</button>
      </body>
      <footer className="App-footer">
      <p>{getFooterCopy(true)}</p>
        <p>{getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
