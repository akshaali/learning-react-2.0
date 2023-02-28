const Product = ({ productName, price }) => {
  return (
    <div>
      <div style={{ border: 1, borderWidth: 1, flex:1, backgroundColor: "green" }}>
        <h2>{productName}</h2>
        <h3>Price : {price}</h3>
      </div>
    </div>
  );
};
export default Product;
