import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CatComp from "../Components/CatComp";
import { APICaller } from "../Utility/ApiCaller";

const CatDetails = () => {
  const params = useParams();
  const [catDetails, setCatDetails] = useState({});

  useEffect(() => {
    APICaller({
      method: "GET",
      url: `https://api.thecatapi.com/v1/images/${params.catId}`,
    })
      .then((response) => {
        console.log("response of Cat details APi", response);
        setCatDetails(response.data);
      })
      .catch((err) => {
        console.error("error of Cat details APi", err);
      });
  }, [params.catId]);

  console.log("Params: ", params);
  return (
    <div>
      <h1>Cat Details</h1>
      <CatComp id={catDetails?.id} imgUrl={catDetails?.url} />
    </div>
  );
};

export default CatDetails;
