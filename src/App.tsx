import React from 'react';

import GlobalStyle from './styles/global';
import Home from './pages/Home'

import { GlobalContext } from './context'

function App() {
  return (
    <GlobalContext>
      <GlobalStyle />
      <Home />
    </GlobalContext>
  );
}

export default App;
