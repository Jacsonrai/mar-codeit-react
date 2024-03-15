import React from "react";
import NewsImage from "../assets/image/news.jpg";
const NewsSingle = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: "2rem",
        }}
      >
        <div>
          <h5
            style={{
              textAlign: "left",
            }}
          >
            Attorney office challenges district court verdict on former
            cricketer Lamichhane
          </h5>
        </div>
        <div>
          <img
            src={NewsImage}
            alt=""
            style={{
              minWidth: "50rem",
              maxWidth: "50rem",
              objectFit: "cover",
            }}
          />
        </div>
        <div
          style={{
            margin: "1rem 35rem",
          }}
        >
          <p>
            In a final hearing at the Supreme Court on February 27, 2023, a
            division bench of justices Sapana Pradhan Malla and Kumar Chudal had
            ruled in favour of the petition filed by Lamichhane, allowing him to
            travel abroad.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsSingle;
