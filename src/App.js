import logo from './logo.png';
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
       <div className="row">
        <div className="col">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
        </div>
        <div className="col">
        <div className="quote">
          <div>Raise your words, </div>
          <div>not your voice. </div>
        </div>
        </div>
        </div>
      </header>
      <main>
        <Dictionary defaultKeyword="book" />
      </main>
      <footer className="App-footer text-center"> <small>This dictionary was coded by Ramona Gherasim and is open-sourced on 
        <a 
        rel="noreferrer"
        target="_blank"
        href="https://github.com/RamonaGherasim/dictionary-project-react"> GitHub </a> and hosted on 
        <a 
        rel="noreferrer"
        target="_blank"
        href="https://laughing-goldwasser-f983cd.netlify.app" > Netlify. </a> </small> </footer>
      </div>
    </div>
  );
}

export default App;
