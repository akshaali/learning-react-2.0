import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to={"/aboutUs"}>
        <h2>About Us</h2>
      </Link>
      <Link to={"/contactUs"}>
        <h2>Contact Us</h2>
      </Link>
      <Link to={`/productDetial/${23}`}>
        <h2>Produc detail</h2>
      </Link>
    </div>
  );
};

export default Home;
