export const replaceTitleFirstTime = (id, title, data) => {
    let adjustedData = [];
  
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].length; j++) {
        let columns = data[i][j].columns;
        adjustedData.push(columns);
        for (let k = 0; k < columns.length; k++) {
          if (columns[k].Id === id) {
            columns[k].title = title;
            document.getElementsByClassName(`title ${id}`)[0].innerHTML = title;
          }
        }
      }
    }
    return adjustedData;
  };
  export const replaceTitleSecondTime = (id, title, data) => {
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].length; j++) {
        console.log(data[i][j]);
        if (data[i][j].Id === id) {
          data[i][j].title = title;
          document.getElementsByClassName(`title ${id}`)[0].innerHTML = title;
        }
      }
    }
  };
  export const aggregateData = (data) => {
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
    return rows;
  };
  