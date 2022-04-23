//Aggregating data from Rows.js 

const AggregateArticles = (data) => {
  let rows = [];
  let columnId = 0;
  let rowId = 0;

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      let columns = data[i][j].columns;
      for (let k = 0; k < columns.length; k++) {
        columns[k].Id = columnId++;
      }
      columns.rowId = rowId++;

      rows.push(columns);
    }
  }

  if (!localStorage.getItem("articleModified")) {
    localStorage.setItem("articleObjects", JSON.stringify(rows));
  }
};

export default AggregateArticles;
