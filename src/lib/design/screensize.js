import useMediaQuery from "@mui/material/useMediaQuery";

const Screensize = (size) => {
  const matches = useMediaQuery(`(max-width:${size}px)`);
  return matches;
};

export default Screensize;
