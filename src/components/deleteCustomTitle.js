import * as React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Link from "@mui/material/Link";
const DeleteTitle = () => {
  return (
    <Alert severity="info">
      <AlertTitle>Du har nå egendefinerte titler på artiklene</AlertTitle>
      For å fjerne egendefinerte titler trykk{" "}
      <Link
        component="button"
        variant="body2"
        onClick={() => {
          localStorage.setItem("articleModified", "");
          window.location.reload();
        }}
      >
        her
      </Link>
    </Alert>
  );
};
export default DeleteTitle;
