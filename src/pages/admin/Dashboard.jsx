import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [refetch, setRefetch] = useState(false);
  useEffect(() => {
    const fetchCategory = async () => {
      const response = await fetch("http://localhost:8000/category");
      const resJson = await response.json();
      setCategoryData(resJson.data);
      setRefetch(false);
    };
    fetchCategory();
    const fetchNews = async () => {
      const response = await fetch("http://localhost:8000/news");
      const resJson = await response.json();
      setNewsData(resJson.data);
      setRefetch(false);
    };
    fetchNews();
  }, [refetch]);

  console.log(newsData, "data");
  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:8000/category/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const resJson = await response.json();
    if (resJson.status !== 200) {
      setErrorMessage(resJson.message);
      setRefetch(true);
    }
    setSuccessMessage(resJson.message);
    setRefetch(true);
    setTimeout(() => {
      setSuccessMessage("");
      setErrorMessage("");
    }, 3000);
  };
  return (
    <div>
      <div>
        <h6>Category Tables</h6>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
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
              {categoryData.length > 0 &&
                categoryData.map((category, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{category.name}</td>
                    <td>{category.slug}</td>
                    <td>
                      <p
                        className="btn btn-danger"
                        onClick={() => handleDelete(category._id)}
                      >
                        Delete
                      </p>
                    </td>
                  </tr>
                ))}
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
                {/* <th scope="col">Action</th> */}
              </tr>
            </thead>
            <tbody>
              {newsData.length > 0 &&
                newsData.map((news, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{news?.title}</td>
                    <td>{news?.category?.name}</td>
                    <td>{news?.image}</td>
                    <td>{news?.description}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
