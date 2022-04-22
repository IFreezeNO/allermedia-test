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
        setarticleData(response.data);
        setIsLoaded(true);
      })
      .catch(function (error) {
        // error
        console.log(error);
      });
  }, []);

  return [isLoaded, articleData];
};

export default FetchData;
