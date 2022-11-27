import logo from './logo.svg';
import React from 'react';
import './App.css';
import ReactDOM from 'react-dom/client';

function App() {

  const root = ReactDOM.createRoot(document.getElementById('root'));

  let localtime = new Date();
  // let qatar = localtime.getTime() + (localtime.getTimezoneOffset());
  // let horaqatar = new Date(qatar + (3600000*9));
  
  
  let qatar = new Date(localtime.getTime() + (3600000*9));
  const titulo = React.createElement(
    'h1',
    {},
    'La hora es: '
  );
  root.render(titulo);  

  const horaMexico = React.createElement(
    'h2',
    {},
    'En México: ' + new Date().toLocaleTimeString('es-MX')
  );

  const horaQatar = React.createElement(
    'h2',
    {},
    'En Qatar: ' + qatar.toLocaleTimeString('es-MX')
  );

  const headerApp = React.createElement(
    'div',
    {className:'App-header'}, 
    titulo, horaMexico, horaQatar 
  );

  const divApp = React.createElement(
    'div',
    {className: 'App'},
    headerApp
  );

  const element = (
    <div className="App">
      <header className="App-header">

      {/* intl datetimeformat, ISO 639-1 standard language codes */}
      {/* <h1>La hora es: </h1> */}
      {/* <h2>En México: {new Date().toLocaleTimeString('es-mx')}</h2> */}
      {/* <h2>En Qatar: {horaqatar.toLocaleTimeString('es-MX')}</h2> */}
      {/* <h2>En Qatar: {qatar.toLocaleTimeString('es-MX')}</h2> */}
      
      

      </header>
    </div>
    );

  // root.render(element);
  root.render(headerApp);
}

export default App;
