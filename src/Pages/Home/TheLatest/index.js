import { useEffect, useState } from "react";

const data = [
  {
    imgUrl: "jkhsjkdhjdkfs",
    title: "jkfhkjshdkjfdhs",
    description: "dksfjkshjkfs",
    category: "klsjkdfs",
    date: "2015-",
  },
  {
    imgUrl: "jkhsjkdhjdkfs",
    title: "jkfhkjshdkjfdhs",
    description: "dksfjkshjkfs",
    category: "klsjkdfs",
    date: "2015-",
  },
  {
    imgUrl: "jkhsjkdhjdkfs",
    title: "jkfhkjshdkjfdhs",
    description: "dksfjkshjkfs",
    category: "klsjkdfs",
    date: "2015-",
  },
];

const LatestComponent = () => {
  const [latestPost, setLatestPost] = useState([]);

  useEffect(() => {
// fetch() => setLatestPost(response);
  }, [])

  return (
    <div>
      <h1>LatestComponent</h1>
      {/* {latestPost.map} */}
    </div>
  );
};

export default LatestComponent;
