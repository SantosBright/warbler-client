import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '../store';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './Main';
import Navbar from './Navbar';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="onboarding">
          <Navbar />
          <Main />
        </div>
      </Router>
    </Provider>
  );
}

export { App };
