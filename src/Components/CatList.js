import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const CatList = () => {
    const dispatch = useDispatch();
  useEffect(() => {}, []);

  const { catList, error } = useSelector((state) => state.fetchCatListReducer);

  return (
    <div>
      <h1>Cat List</h1>
      {catList.map((item) => {
        return (
          <div key={item.id}>
            <div>
              <h1>Id: {item.id}</h1>
              <img src={item.imgUrl} alt="cat" width={500} height={500} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CatList;
