import './sources/css/App.css';
import Box from '@mui/material/Box';
import Rows from './components/rows';
import FetchData from './hooks/fetchApiData'

function App() {

  const [ isLoaded, articleData ] = FetchData()

  return (
    <Box className="container" sx={{ flexGrow: 1 }}>
       {isLoaded ? <Rows data={articleData}/> : <p>Loading...</p>}
    </Box>
  );
}

export default App;
