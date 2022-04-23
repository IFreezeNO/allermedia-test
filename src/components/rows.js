import Grid from "@mui/material/Grid";
import React from "react";
import aggregateArticles from "../hooks/aggregatingData";
import Thumbnail from "./Article";

const Rows = ({ data }) => {
  aggregateArticles(data);

  let rows = JSON.parse(localStorage.getItem("articleObjects"));

  return (
    <>
      {rows?.length > 0
        ? rows.map((row, index) => {
            return (
              <Grid container key={index} spacing={2}>
                {row.map((column) => (
                  <Grid key={column.Id} item xs={column.width}>
                    <Thumbnail
                      imageUrl={column.imageUrl}
                      title={column.title}
                      url={column.url}
                      id={column.Id}
                      data={data}
                    />
                  </Grid>
                ))}
              </Grid>
            );
          })
        : null}
    </>
  );
};

export default Rows;
