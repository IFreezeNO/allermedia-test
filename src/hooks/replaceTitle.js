//Replacing title with a user input title

import Swal from "sweetalert2";
import useState from "react";

const ReplaceTitle = async (id, currentTitle, data) => {
  let adjustedData = [];

  const { value: title } = await Swal.fire({
    title: "Skriv inn ny tittel",
    input: "text",
    confirmButtonText: "Endre tittel",
    inputPlaceholder: currentTitle,
  });
  if (title.length > 3 && title.length < 110) {
    Swal.fire({
      icon: "success",
      text: `Ny tittel: ${title}`,
    });
    if(localStorage.getItem("articleModified")){
      console.log(data  )
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
          console.log(data[i][j])
          if (data[i][j].Id === id) {
            data[i][j].title = title;    
            document.getElementsByClassName(`title ${id}`)[0].innerHTML = title;
          }
        }
        }
        localStorage.setItem("articleObjects", JSON.stringify(data));
    }
    else {
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
      localStorage.setItem("articleModified", true);
      localStorage.setItem("articleObjects", JSON.stringify(adjustedData));
      console.log(adjustedData);
      window.location.reload();

    }


  } else {
    Swal.fire({
      icon: "error",
      text: 'Tittelen må være mellom 3 og 150 karakterer',
    });
  }
 
  
};

export default ReplaceTitle;
