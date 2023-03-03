import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { APICaller } from "../Utility/ApiCaller";
import CatComp from "../Components/CatComp";

const CatList = () => {
  const navigate = useNavigate();
  const [cataData, setCatData] = useState([]);

  useEffect(() => {
    APICaller({
      method: "GET",
      url: "https://api.thecatapi.com/v1/images/search?limit=10",
    })
      .then((res) => {
        console.log("APICaller .then", res);
        setCatData(res?.data);
      })
      .catch((err) => {
        console.log("APICaller .catch", err);
      });
  }, []);

  const handleNavigate = (id) => {
    navigate(`/catDetails/${id}`);
  };

  return (
    <div>
      <h1>Cat List</h1>
      {cataData.map((item) => {
        return (
          <div key={item.id} onClick={() => handleNavigate(item?.id)}>
            <CatComp id={item?.id} imgUrl={item?.url} />
          </div>
        );
      })}
    </div>
  );
};

export default CatList;
