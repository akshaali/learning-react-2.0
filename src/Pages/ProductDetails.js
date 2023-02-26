import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  console.log("Params: ", params);
  return (
    <div>
      <h1>Proudct detail : {params.productId}</h1>
    </div>
  );
};
export default ProductDetail;
