//Replacing title with a user input title

import Swal from "sweetalert2";
import {
  replaceTitleFirstTime,
  replaceTitleSecondTime,
} from "../hooks/loopArrays";

const ReplaceTitle = async (id, currentTitle, data) => {
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
    if (localStorage.getItem("articleModified")) {
      replaceTitleSecondTime(id, title, data);
      localStorage.setItem("articleObjects", JSON.stringify(data));
    } else {
      let titleReplacement = replaceTitleFirstTime(id, title, data);
      localStorage.setItem("articleModified", true);
      localStorage.setItem("articleObjects", JSON.stringify(titleReplacement));
    }
  } else {
    Swal.fire({
      icon: "error",
      text: "Tittelen må være mellom 3 og 150 karakterer",
    });
  }
};

export default ReplaceTitle;
