import { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token"); // JWT

      const res = await axios.post(
        "http://localhost:3000/products",
        {
          name,
          description,
          price
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setMessage("✅ Product added successfully");
      setName("");
      setDescription("");
      setPrice("");
    } catch (err) {
      setMessage(
        err.response?.data?.message || "❌ Failed to add product"
      );
    }
  };

  return (
    <div className="container">
      <h2 className="mb-4">Add Product</h2>

      {message && <p>{message}</p>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Description</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Price</label>
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <button className="btn btn-success">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
