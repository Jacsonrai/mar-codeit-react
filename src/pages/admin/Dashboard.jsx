import React from "react";

const Dashboard = () => {
  return (
    <div>
      <div>
        <h6>Category Tables</h6>
        <div
          style={{
            padding: "10px",
          }}
        >
          <table
            class="table"
            style={{
              width: "100%",
              border: "1px solid gray",
            }}
          >
            <thead>
              <tr>
                <th scope="col">S.N</th>
                <th scope="col">Category Name</th>
                <th scope="col">Slug</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <h6>News Tables</h6>
        <div
          style={{
            padding: "10px",
          }}
        >
          <table
            class="table"
            style={{
              width: "100%",
              border: "1px solid gray",
            }}
          >
            <thead>
              <tr>
                <th scope="col">S.N</th>
                <th scope="col">Title</th>
                <th scope="col">Category</th>
                <th scope="col">Image</th>
                <th scope="col">Description</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
