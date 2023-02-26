const Product = ({ productName, price }) => {
    return (
      <div>
        <div>
          <h1>{productName}</h1>
          <h3>Price : {price}</h3>
        </div>
      </div>
    );
  };
  export default Product;
  