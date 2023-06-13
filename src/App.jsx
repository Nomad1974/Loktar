
import homeImg from "../src/img/background/firstScreen.jpg";
import FirstScreen from './pages/FirstScreen';
import GlobalStyles from './style/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <FirstScreen img={homeImg} />
    </>
  );
}

export default App;
