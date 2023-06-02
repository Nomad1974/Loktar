import { Route, Routes } from "react-router-dom";

import GlobalStyles from './style/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
          <Route path="/" element={
            <h1 style={{fontFamily: 'M PLUS 1p'}}>
              hello react
            </h1>
          } />
      </Routes>
    </>
  );
}

export default App;
