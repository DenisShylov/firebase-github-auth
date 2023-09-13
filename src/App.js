import { Container } from '@mui/material';
import LoginPage from './Pages/LoginPage';

import './App.css';
import Constants from './Constants/Constants';
import { removeData } from './Redux/actionCreators';
const App = () => {
  const { dispatch } = Constants();
  window.onload = function () {
    sessionStorage.setItem('loaded', true);
    const loaded = sessionStorage.getItem('loaded');

    if (loaded) {
      console.log('reload');
      dispatch(removeData());
    }
  };
  return (
    <Container maxWidth="xl" className="App-container">
      <LoginPage />
    </Container>
  );
};

export default App;
