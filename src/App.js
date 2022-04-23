//Fetching the data from the Aller media API and sending it to Rows. If there is a title who is modified it will show an alert box so they can delete the user defined text. 

import "./sources/css/index.css";
import "./sources/css/phone.css";

import Box from "@mui/material/Box";
import FetchData from "./hooks/fetchApiData";
import Rows from "./components/Rows";
import DeleteTitle from "./components/DeleteCustomTitle";
import Header from "./components/Header";
import Loading from "./lib/web/loading";

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
