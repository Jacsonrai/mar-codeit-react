import React from "react";
import { MdDelete } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NewsCard = ({ title, image, description, category }) => {
  const authCtx = useSelector((state) => state.authReducer);
  const { isLoggedIn } = authCtx;
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
        <Link
          to={"/news/1"}
          style={{
            textDecoration: "nonecd",
          }}
        >
          <h5 className="card-title">{title}</h5>
        </Link>
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
        {isLoggedIn && (
          <div>
            <button
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
              }}
            >
              <MdDelete
                style={{
                  fontSize: "1.6rem",
                  color: "red",
                }}
              />
            </button>
            <button
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
              }}
            >
              <GoPencil
                style={{
                  fontSize: "1.6rem",
                }}
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
