import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Provider }             from 'react-redux';

import { ABOUT, ARTISTS, MIXES, ROOT } from './utils/constants/routes';

import Main from './components/pages/Main';

import { WithModal } from './components/hoc/withModal';
import { WithToast } from './components/hoc/withToast';
import { WithRedirect } from './components/hoc/withRedirect';

import store from './store';

import './App.scss';

function App() {
  return (
    <div className="App">
        <HashRouter>
          <Provider store={store}>
            <WithModal>
              <WithToast>
                <WithRedirect>
                  <Routes>
                    <Route path={ROOT} element={<Main />} />
                    <Route path={ARTISTS} element={<Main />} />
                    <Route path={MIXES} element={<Main />} />
                    <Route path={ABOUT} element={<Main />} />
                  </Routes>
                </WithRedirect>
              </WithToast>
            </WithModal>
          </Provider>
        </HashRouter>
    </div>
  );
}

export default App;
