import React from "react";
import "./card.css";

interface Props {
  image: string;
  title: string;
  description: string;
  url: string;
}

export const Card = ({ image, title, description, url }: Props) => {
  return (
    <div className="card-wrapper">
      <img src={image} className="card-image"></img>
      <h2 className="card-heading">{title}</h2>
      <p className="card-p">{description}</p>
      <a href={url} className="card-button">
        Find Out More
      </a>
    </div>
  );
};

export default Card;
