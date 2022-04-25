//Article Button

import ReplaceTitle from "../hooks/replaceTitle";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import Tooltip from "@mui/material/Tooltip";

const ThumbnailBtn = ({ id, title, data }) => {
  return (
    <Tooltip title="Endre tittelen">
      <IconButton
        aria-label="Endre tittel"
        color="primary"
        onClick={() => ReplaceTitle(id, title, data)}
      >
        <EditIcon fontSize="small" />
      </IconButton>
    </Tooltip>
  );
};

export default ThumbnailBtn;
