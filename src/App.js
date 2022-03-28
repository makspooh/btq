import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider }             from 'react-redux';

import { ABOUT, ARTISTS, MIXES, ROOT } from './utils/constants/routes';

import Main from './components/pages/Main';
import { WithRedirect } from './components/hoc/withRedirect';

import store from './store';

import './App.scss';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Provider store={store}>
            <WithRedirect>
              <Routes>
                <Route path={ROOT} element={<Main />} />
                <Route path={ARTISTS} element={<Main />} />
                <Route path={MIXES} element={<Main />} />
                <Route path={ABOUT} element={<Main />} />
              </Routes>
            </WithRedirect>
          </Provider>
        </BrowserRouter>
    </div>
  );
}

export default App;
