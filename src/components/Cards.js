import Card from "./Card";

const Cards = ({ appointments }) => {
  return (
    <>
      {appointments.map((appointment, index) => (
        <Card key={index} appointment={appointment} />
      ))}
    </>
  );
};

export default Cards;
