import React from "react";
import dog from "../../img/placeholder_dog.png";
import cat from "../../img/placeholder_cat.png";
import bird from "../../img/placeholder_bird.png";
import rabbit from "../../img/placeholder_rabbit.png";
import horse from "../../img/placeholder_horse.png";
import furry from "../../img/placeholder_furry.png";
import barnyard from "../../img/placeholder_barnyard.png";
import scalesFinsOther from "../../img/placeholder_scales.png";

const Placeholder = ({ type, name, className, onClick }) => {
  let typeSource = "";

  if (type === "Dog") {
    typeSource = dog;
  } else if (type === "Cat") {
    typeSource = cat;
  } else if (type === "Bird") {
    typeSource = bird;
  } else if (type === "Rabbit") {
    typeSource = rabbit;
  } else if (type === "Horse") {
    typeSource = horse;
  } else if (type === "Barnyard") {
    typeSource = barnyard;
  } else if (type === "Small & Furry") {
    typeSource = furry;
  } else {
    typeSource = scalesFinsOther;
  }

  return (
    <img
      src={typeSource}
      alt={`${name} the ${type}`}
      className={className}
      onClick={onClick}
    />
  );
};

export default Placeholder;
