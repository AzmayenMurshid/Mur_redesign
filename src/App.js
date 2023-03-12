import './App.css';
import { Button, Grid } from '@mui/material';
import ThreeCanvas from './components/Canvas';

function App() {
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >

        <Grid item xs={3}>
          <ThreeCanvas />
        </Grid>   
  
      </Grid> 
    </>
  );
}

export default App;
