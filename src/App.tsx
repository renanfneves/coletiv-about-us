import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import GlobalTheme from './globalTheme';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalTheme />
    </>
  );
}

export default App;
