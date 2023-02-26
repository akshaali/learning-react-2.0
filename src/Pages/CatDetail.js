import CatComp from "../Component/CatComp";
import { useParams, useLocation } from "react-router-dom";

const CatDetails = () => {
  const params = useParams();
  const location = useLocation();
  console.log("Params: ", params, location);
  return (
    <div>
      <h1>Cat Details</h1>
      <CatComp
        id={location?.state?.catDetail?.id}
        imgUrl={location?.state?.catDetail?.url}
      />
    </div>
  );
};

export default CatDetails;
