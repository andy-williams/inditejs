import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/containers/app.js';
import store from './store';

const render = () => {
  ReactDOM.render(
      <App />,
      document.getElementById("app-container")
  );
};

store.subscribe(render);
render();