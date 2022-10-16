import MMConsulting from "./MMConsulting.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src={MMConsulting}
            className="App-logo img-fluid rounded"
            alt="logo"
          />
          <br />
          <h1>ENGLISH DICTIONARY</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="Sunrise" />
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
            Marta Coelho for SheCodes Workshop
          </small>
        </footer>
      </div>
    </div>
  );
}
