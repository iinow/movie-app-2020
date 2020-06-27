import React from "react";

interface FoodProps {
  id: number,
  name: string,
  image: string,
  rating: number
}

const Food: React.FC<FoodProps> = props => {
  return (
    <div>
      <h2>I like {props.name}</h2>
      <img src={props.image} alt={props.name} />
    </div>
  );
};

export default Food;
