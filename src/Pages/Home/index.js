import HeaderComponent from "../../Components/HeaderComponent/Index";
import PosterComponent from "./PosterComponent";
import LatestComponent from "./TheLatest";

const Home = () => {
  
  return (
    <div>
      <HeaderComponent />
      <div>
        <PosterComponent />
        <LatestComponent />
      </div>
    </div>
  );
};

export default Home;
