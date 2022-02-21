import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//Intern av react <APP/>
// som likar React.createElemntskapa upp app, inga pops: tom objeckt,inga childrn
//react alltid översätter till javaScript kod
//React.createElement(App, {},null)