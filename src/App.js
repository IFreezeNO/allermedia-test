import "./sources/css/index.css";
import "./sources/css/phone.css";

import Box from "@mui/material/Box";
import Rows from "./components/Rows.js";
import FetchData from "./hooks/fetchApiData.js";
import DeleteTitle from "./components/DeleteCustomTitle.js";
import Header from "./components/Header.js";
import Loading from "./lib/web/loading.js";

function App() {
  const [isLoaded, articleData] = FetchData();

  return (
    <>
      <Header />
      <Box className="container" sx={{ flexGrow: 1 }}>
        {localStorage.getItem("articleModified") ? (
          <DeleteTitle data={articleData} />
        ) : null}
        {isLoaded ? <Rows data={articleData} /> : <Loading />}
      </Box>
    </>
  );
}

export default App;
