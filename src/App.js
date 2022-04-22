import './sources/css/index.css';
import './sources/css/phone.css';

import Box from '@mui/material/Box';
import Rows from './components/rows';
import FetchData from './hooks/fetchApiData'
import DeleteTitle from './components/deleteCustomTitle';

function App() {

  const [ isLoaded, articleData ] = FetchData()

  return (
    <>
    <Box className="container" sx={{ flexGrow: 1 }}>
    {localStorage.getItem("articleModified") ? <DeleteTitle data={articleData}/> : null}
       {isLoaded ? <Rows data={articleData}/> : <p>Loading...</p>}
    </Box>

    </>
  );
}

export default App;
