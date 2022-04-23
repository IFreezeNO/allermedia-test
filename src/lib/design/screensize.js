//Checking the screensize of the visitor to make the imageUrl from the JSON object responsive.

import useMediaQuery from "@mui/material/useMediaQuery";

const Screensize = (size) => {
  const matches = useMediaQuery(`(max-width:${size}px)`);
  return matches;
};

export default Screensize;
