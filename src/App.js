import React, { useEffect, useState } from 'react';
import './sources/css/App.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import axios from 'axios';
import Rows from './components/rows';

function App() {
  const [articles, setArticles] = useState([])


  useEffect(() => {
    axios.get('https://storage.googleapis.com/aller-structure-task/test_data.json')
     .then(function (response) {
      //insert data from API into useStaate
      setArticles(response.data)
    })
     .catch(function (error) {
       // error
       console.log(error);
     })

   }, []);


  return (
    <Box className="container" sx={{ flexGrow: 1 }}>
       {articles ? <Rows data={articles}/> : <p>Loading...</p>}
    </Box>
  );
}

export default App;
