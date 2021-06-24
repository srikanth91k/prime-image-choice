import axios from "axios";

const BaseURL = `https://api.unsplash.com`;

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Content-type": "application/json",
  Authorization: `Client-ID RcycH1bOg34Mntn8ya8LHJVe6lc2us7trc7fDaDedjY`,
};

export const getCollection = () => {
  return axios
    .get(`${BaseURL}/collections?per_page=20`, {
      headers: headers,
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("Error", err);
    });
};

export const getCollectionImages = ({ coll_Id, per_page }) => {
  return axios
    .get(`${BaseURL}/collections/${coll_Id}/photos?per_page=${per_page}`, {
      headers: headers,
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("Error", err);
    });
};
