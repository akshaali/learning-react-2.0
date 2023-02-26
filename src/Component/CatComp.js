const CatComp = ({ imgUrl, id }) => {
  return (
    <div>
      <h1>Id: {id}</h1>
      <img src={imgUrl} alt="cat" width={500} height={500} />
    </div>
  );
};

export default CatComp;
