import useMediaQuery from "@mui/material/useMediaQuery";

const MediaQuery = (size) => {
  const matches = useMediaQuery(`(max-width:${size}px)`);
  return matches;
};

export default MediaQuery;
