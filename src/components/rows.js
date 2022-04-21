import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from "react";
import "../sources/css/index.css"


function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}


const Rows = ({ data }) => {
  const { height, width } = useWindowDimensions();

  const [rows, setRows] = useState([]);
  let tempRowsArr = [];

  setTimeout(() => {
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].length; j++) {
        let columns = data[i][j].columns;
         tempRowsArr.push(columns);
      }
    }
    setRows(tempRowsArr);

  }, 1000);


const redirect = (url) => {
  window.location.href = url;
}
  


  if(rows.length == 0) {
      return <p>Loading...</p>
  }
  return (
    <>
        {
            rows?.length > 0
          ? rows.map((row, index) => {
            return (
                <Grid container key={index} spacing={2}>
              {
              row.map((column, index )=> 
                <Grid  item xs={column.width}   
                >
                <article className="model" onClick={() => redirect(column.url)} key={index}>
                <div className="hd-Image">
                  <figure>
                    <img src={ width < 400 ? `${column.imageUrl}&height=150&width=150` : `${column.imageUrl}&height=250&width=200`}  alt={column.title}  id="imgArticle" />
                 </figure>
                </div>
                <p className="title">{column.title} </p>    
                </article>
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