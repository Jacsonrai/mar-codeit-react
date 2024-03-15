import React from "react";
import NWButton from "../../component/NWButton";

const News = () => {
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
          <form>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Title
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
                Category
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div>
              <label for="exampleFormControlInput1" class="form-label">
                Image url
              </label>
              <input
                type="email"
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
