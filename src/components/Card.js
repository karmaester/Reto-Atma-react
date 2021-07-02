const Card = ({ item }) => {
  return (
    <div className="card">
      <h3>{item.name + " " + item.last_name}</h3>
      <span>{item.email}</span>
      <span>{item.phone}</span>
      <span>{item.created_at.substring(0, 10)}</span>
      <button>{item.status}</button>
    </div>
  );
};

export default Card;
