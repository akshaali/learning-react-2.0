const hocName = (Comp) => {
  console.log("Comp", Comp);
  return () => (
    <div style={{ backgroundColor: "red" }}>
      <Comp />
      <h1> heyyy</h1>
    </div>
  );
};

export default hocName;
