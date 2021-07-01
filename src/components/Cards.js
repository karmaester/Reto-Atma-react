import Card from "./Card";

const Cards = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </>
  );
};

export default Cards;
