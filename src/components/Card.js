const Card = ({ appointment }) => {
  return (
    <div className="">
      <h3>{appointment.name}</h3>
      <p>{appointment.last_name}</p>
    </div>
  );
};

export default Card;
