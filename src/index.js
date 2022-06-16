import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import "./index.css";



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// import { createRoot } from 'react-dom/client';
// import App from './App';
// import "./index.css";

// const root = createRoot(document.getElementById('root'));
// root.render(App);
// root.render(<App tab="home" />);

// import ReactDOM from "react-dom"
// import App from "./App"
// import "./index.css"

// ReactDOM.render(<App/>, document.querySelector("#root"));

