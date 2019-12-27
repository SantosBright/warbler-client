import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '../store';
import { BrowserRouter as Router } from 'react-router-dom';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          Hello world
        </div>
      </Router>
    </Provider>
  );
}

export { App };
