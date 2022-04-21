import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from "react";


const Rows = ({ data }) => {
  const [rows, setRows] = useState([]);
  let tempRowsArr = [];

  
  // console.log(data[0][0].columns[0].url)
  useEffect( () => {
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].length; j++) {
        let columns = data[i][j].columns;
         tempRowsArr.push(columns);
      }
    }
    insertData(tempRowsArr);
  }, []);

const insertData = (data) => {
    setRows(data);
}
  



  if(rows.length == 0) {
      return <p>Loading...</p>
  }
  return (
    <>
        {
            rows?.length > 0
          ? rows.map((row) => {
            return (
                <Grid container spacing={2}>
              {
              row.map(column => 
                <Grid item xs={column.width}>
                <article key={column.index}> <img src={column.imageUrl}  alt={column.title}  /> {column.title} </article>
                </Grid> 
              )
              }
              </Grid> 
            )
          })
          : null }
    </>
  );
};

export default Rows;

/*
{
            
            rows?.length > 0
          ? rows[35].map((value) => 
        
          <Grid item xs={value.width}>
          <article key={value.index}> <img src={value.imageUrl}  alt={value.title}  /> {value.title} </article>
          </Grid> 
        )
          : null}
*/