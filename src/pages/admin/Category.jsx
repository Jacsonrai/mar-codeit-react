import React, { useState } from "react";
import NWButton from "../../component/NWButton";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const categoryCreateUrl = "http://localhost:8000/category";
  const [error, setErrorMessage] = useState("");
  const nav = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, slug } = e.target.elements;

    const response = await fetch(categoryCreateUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.value,
        slug: slug.value,
      }),
    });
    const resJson = await response.json();
    if (resJson.status === 200) {
      nav("/admin/dashboard");
    }
    setErrorMessage(resJson.message);
    setTimeout(() => {
      setErrorMessage("");
    }, 3000);
  };
  return (
    <div>
      <div
        style={{
          padding: "10px",
        }}
      >
        <h5>Create Category</h5>
        <div
          style={{
            maxWidth: "50rem",
            marginTop: "10px",
          }}
        >
          <form onSubmit={(e) => handleSubmit(e)}>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Category Name
              </label>
              <input
                type="text"
                name="name"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Slug
              </label>
              <input
                type="text"
                name="slug"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <NWButton type="submit">Add category</NWButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Category;
