import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            <a
              href="https://github.com/MartaCoelho750/dictionary-project"
              rel=" noopener noreferrer"
              target="_blank"
            >
              Open Source Code By
            </a>{" "}
            Marta Coelho for SheCodes
          </small>
        </footer>
      </div>
    </div>
  );
}
