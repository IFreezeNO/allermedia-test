//Fetching the API data from Aller media

import { useEffect, useState } from "react";
import axios from "axios";

const FetchData = () => {
  const [articleData, setarticleData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("https://storage.googleapis.com/aller-structure-task/test_data.json")
      .then(function (response) {
        //insert data from API into useState
        setIsLoaded(true);
        if (localStorage.getItem("articleModified")) {
          setarticleData(JSON.parse(localStorage.getItem("articleObjects")));
        } else {
          setarticleData(response.data);
        }
      })
      .catch(function (error) {
        // error
        console.log(error);
      });
  }, []);

  return [isLoaded, articleData];
};

export default FetchData;
