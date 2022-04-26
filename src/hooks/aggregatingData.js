//Aggregating data from Rows.js
import { aggregateData } from "../hooks/loopArrays";

const AggregateArticles = (data) => {
  let aggregatedData = aggregateData(data);

  if (!localStorage.getItem("articleModified")) {
    localStorage.setItem("articleObjects", JSON.stringify(aggregatedData));
  }
};

export default AggregateArticles;
