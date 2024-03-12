import React from "react";
import NewsCard from "../component/NewsCard";
import NewsImage from "../assets/image/news.jpg";

const Home = () => {
  const newsData = [
    {
      title: "News of card 1",
      image: "/news.jpg",
      description: "i am a news description",
      category: "nations",
    },
    {
      title: "News of card2",
      image: NewsImage,
      description: "i am a news description",
      category: "capital",
    },
    {
      title: "News of card 1",
      image: "/news.jpg",
      description: "i am a news description",
      category: "politics",
    },
    {
      title: "News of card 1",
      image: "/news.jpg",
      description: "i am a news description",
      category: "politics",
    },
  ];
  return (
    <div
      style={{
        padding: "1rem 2rem",
      }}
    >
      <div
        style={{
          textAlign: "center",
        }}
      >
        <label style={{ fontSize: "2rem", borderBottom: "1px solid gray" }}>
          Recent News
        </label>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "1rem",
            flexWrap: "wrap",
            gap: 5,
          }}
        >
          {newsData.map((news, index) => (
            <React.Fragment key={index}>
              <NewsCard
                image={news.image}
                description={news.description}
                title={news.title}
                category={news.category}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <label style={{ fontSize: "2rem", borderBottom: "1px solid gray" }}>
          Capital
        </label>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "1rem",
            flexWrap: "wrap",
            gap: 5,
          }}
        >
          {newsData.map(
            (news, index) =>
              news.category === "capital" && (
                <React.Fragment key={index}>
                  <NewsCard
                    image={news.image}
                    description={news.description}
                    title={news.title}
                    category={news.category}
                  />
                </React.Fragment>
              )
          )}
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <label style={{ fontSize: "2rem", borderBottom: "1px solid gray" }}>
          Nation
        </label>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "1rem",
            flexWrap: "wrap",
            gap: 5,
          }}
        >
          {newsData.map(
            (news, index) =>
              news.category === "nations" && (
                <React.Fragment key={index}>
                  <NewsCard
                    image={news.image}
                    description={news.description}
                    title={news.title}
                    category={news.category}
                  />
                </React.Fragment>
              )
          )}
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <label style={{ fontSize: "2rem", borderBottom: "1px solid gray" }}>
          Politics
        </label>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "1rem",
            flexWrap: "wrap",
            gap: 5,
          }}
        >
          {newsData.map(
            (news, index) =>
              news.category === "politics" && (
                <React.Fragment key={index}>
                  <NewsCard
                    image={news.image}
                    description={news.description}
                    title={news.title}
                    category={news.category}
                  />
                </React.Fragment>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
