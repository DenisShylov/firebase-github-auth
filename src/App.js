import { Container } from '@mui/material';
import './App.css';
import SignIn from './Components/Auth/SignIn';

function App() {
  return (
    <Container
      maxWidth="xs"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
      }}
    >
      <SignIn />
    </Container>
  );
}

export default App;
