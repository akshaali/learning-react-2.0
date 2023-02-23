import Product from "./Component/Product";

const data = [
  {
    id: 1,
    productName: "T-shirt",  // 0 - 0
    price: 340,
    discount: 20,
  },
//   {
//     id: 2,
//     productName: "Skirt",
//     price: 340,
//     discount: 20,
//   },
  {
    id: 3,
    productName: "Shirt", // 2 - 1
    price: 340,
    discount: 20,
  },
  {
    id: 4,
    productName: "Jeans",
    price: 340,
    discount: 20,
  },
  {
    id: 5,
    productName: "Top",
    price: 340,
    discount: 20,
  },
];

const ProductList = () => {
  return (
    <div key={"2214321"}>
      <h1>Product List</h1>
      {data.map((item, index) => {
        console.log("item, index", item, index);
        return (
          <Product key={index} productName={item.productName} price={item.price}/>
        );
      })}
    </div>
  );
};

export default ProductList;
