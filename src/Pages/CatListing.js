import { catData } from "../Utility/DummyData";
import CatComp from "../Component/CatComp";
import { useNavigate } from "react-router-dom";

const CatList = () => {
  const navigate = useNavigate();

  const handleNavigate = (id, item) => {
    console.log("parameters", id, item);
    /*
     * Helps to navigate between pages
     * takes 2 arguments: 1. path, navigation options(optional)
     */

    //push
    navigate(`/catDetails/${id}`, {
      state: { catDetail: item, status: "Available" },
    });

    //replace
    // navigate(`/catDetails/${id}`, {
    //   state: { catDetails: item, status: "Available" },
    //   replace: true,
    // });

    //GoBack 
    // navigate(-1);

    //GoForward
    // navigate(1);
  };

  return (
    <div>
      {catData.map((item) => {
        return (
          <div key={item.id} onClick={() => handleNavigate(item.id, item)}>
            <CatComp id={item?.id} imgUrl={item?.url} />
          </div>
        );
      })}
    </div>
  );
};

export default CatList;
