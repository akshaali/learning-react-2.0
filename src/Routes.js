import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";
import PageNotFound from "./Pages/PageNotFound";
import ContactUs from "./Pages/ContactUs";
import ProductDetails from "./Pages/ProductDetails";

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="*" element={<PageNotFound />} />

        <Route path="/productDetial/:productId" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RouterComponent;

/*

/productList

/productDetail
*/
