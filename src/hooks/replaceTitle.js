import Swal from "sweetalert2";


const ReplaceTitle = async (id, currentTitle, data) => {
  let adjustedData = [];

  const { value: title } = await Swal.fire({
    title: "Skriv inn ny tittel",
    input: "text",
    confirmButtonText: "Endre tittel",
    inputPlaceholder: currentTitle,
  });
  if (title.length > 3) {
    Swal.fire({
      icon: "success",
      text: `Ny tittel: ${title}`,
    });
    
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
    console.log(data)


    localStorage.setItem("articleModified", true);
    localStorage.setItem("articleObjects", JSON.stringify(adjustedData));
  } else {
    Swal.fire({
      icon: "error",
      text: 'Tittelen må være lenger enn 3 karakterer',
    });
  }
 
  
};

export default ReplaceTitle;
