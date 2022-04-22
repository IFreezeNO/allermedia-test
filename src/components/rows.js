import Grid from "@mui/material/Grid";
import React from "react";
import "../sources/css/index.css";
import "../sources/css/phone.css";
import aggregateArticles from "../hooks/aggregatingData";
import screenSize from "../lib/design/screensize";
import ReplaceTitle from "../hooks/replaceTitle";
import redirect from "../lib/web/redirect";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";

const Rows = ({ data }) => {
  aggregateArticles(data);

  let rows = JSON.parse(localStorage.getItem("articleObjects"));

  if (rows.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {rows?.length > 0
        ? rows.map((row, index) => {
            return (
              <Grid container key={index} spacing={2}>
                {row.map((column) => (
                  <Grid key={column.Id} item xs={column.width}>
                    <article className="model">
                      <div
                        className="hd-Image"
                        onClick={() => redirect(column.url)}
                      >
                        <figure>
                          <img
                            src={
                              screenSize(400)
                                ? `${column.imageUrl}&height=150&width=150`
                                : `${column.imageUrl}&height=250&width=200`
                            }
                            alt={column.title}
                            id="imgArticle"
                          />
                        </figure>
                      </div>
                      <span
                        className={`title ${column.Id}`}
                        onClick={() => redirect(column.url)}
                      >
                        {column.title}
                      </span>
                      <IconButton
                        aria-label="Endre tittel"
                        color="primary"
                        onClick={() =>
                          ReplaceTitle(column.Id, column.title, data)
                        }
                      >
                        <EditIcon fontSize="small" />
                      </IconButton>
                    </article>
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
