const Card = ({ item }) => {
  return (
    <div className="">
      <h3>{item.name}</h3>
      <p>{item.last_name}</p>
    </div>
  );
};

export default Card;
