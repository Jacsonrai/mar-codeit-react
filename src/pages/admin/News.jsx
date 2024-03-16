import React, { useEffect, useState } from "react";
import NWButton from "../../component/NWButton";
import { useNavigate } from "react-router-dom";

const News = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const nav = useNavigate();
  useEffect(() => {
    const fetchCategory = async () => {
      const response = await fetch("http://localhost:8000/category");
      const resJson = await response.json();
      setCategoryData(resJson.data);
    };
    fetchCategory();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      title: e.target.elements.title.value,
      image: e.target.elements.image.value,
      description: e.target.elements.description.value,
      category: e.target.elements.category.value,
    };
    const response = await fetch("http://localhost:8000/news-create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...payload }),
    });
    const resJson = await response.json();
    console.log(resJson);
    if (resJson.errors) {
      setErrorMessage("field is required");
    }
    if (resJson.status !== 200) {
      setErrorMessage(resJson.message);
    } else {
      nav("/admin/dashboard");
    }
  };
  return (
    <div>
      <div
        style={{
          padding: "10px",
        }}
      >
        <h5>Create News</h5>
        <div
          style={{
            maxWidth: "50rem",
            marginTop: "10px",
          }}
        >
          <form onSubmit={(e) => handleSubmit(e)}>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Title
              </label>
              <input
                type="text"
                name="title"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div
              class="mb-3"
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label for="exampleFormControlInput1" class="form-label">
                Category
              </label>
              <select
                name="category"
                style={{
                  fontSize: "1.2rem",
                  padding: 4,
                }}
              >
                {categoryData.length > 0 &&
                  categoryData.map((category, index) => (
                    <option value={category._id}>{category.name}</option>
                  ))}
              </select>
            </div>
            <div>
              <label for="exampleFormControlInput1" class="form-label">
                Image url
              </label>
              <input
                type="text"
                name="image"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>

            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Description
              </label>
              <textarea
                name="description"
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <NWButton type="submit">Add News</NWButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default News;
