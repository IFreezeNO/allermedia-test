//Delete saved custom Title

import * as React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Link from "@mui/material/Link";
const DeleteCustomTitle = () => {
  return (
    <Alert severity="info">
      <AlertTitle>Du har egendefinerte titler på artiklene</AlertTitle>
      I denne modusen vil ikke applikasjonen hente inn nye artikler før egendefinerte titler er fjernet.  Trykk{" "}
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
      {" "} for å fjerne titlene.
    </Alert>
  );
};
export default DeleteCustomTitle;
