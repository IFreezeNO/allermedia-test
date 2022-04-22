import Swal from "sweetalert2";

const replaceTitle = async (id, currentTitle, data) => {
  const { value: title } = await Swal.fire({
    title: "Skriv inn ny tittel",
    input: "text",
    confirmButtonText: "Endre tittel",
    inputPlaceholder: currentTitle,
  });
  if (title) {
    Swal.fire({
      icon: "success",
      text: `Ny tittel: ${title}`,
    });
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].length; j++) {
        let columns = data[i][j].columns;
        for (let k = 0; k < columns.length; k++) {
          if (columns[k].Id === id) {
            columns[k].title = title;
            document.getElementsByClassName(`title ${id}`)[0].innerHTML = title;
          }
        }
      }
    }
  }
};

export default replaceTitle;
