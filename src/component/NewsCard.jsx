import React from "react";

const NewsCard = ({ title, image, description, category }) => {
  return (
    <div
      className="card"
      style={{
        width: "18rem",
        position: "relative",
      }}
    >
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p
          style={{
            background: "blue",
            color: "white",
            width: "fit-content",
            borderTopRightRadius: "2rem",
            borderBottomRightRadius: "2rem",
            padding: "0px 10px",
            position: "absolute",
            top: 4,
            left: 0,
          }}
        >
          {category}
        </p>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default NewsCard;
