import { BrowserRouter, Routes, Route } from "react-router-dom";
import CatList from "../Pages/CatListing";
import CatDetails from "../Pages/CatDetails";

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CatList />} />
        <Route path="/catDetails/:catId" element={<CatDetails />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RouterComponent;