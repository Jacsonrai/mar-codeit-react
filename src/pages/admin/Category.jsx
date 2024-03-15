import React from "react";
import NWButton from "../../component/NWButton";

const Category = () => {
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
          <form>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Category Name
              </label>
              <input
                type="email"
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
                type="email"
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
