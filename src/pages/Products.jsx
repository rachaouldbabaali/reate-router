import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

const Products = () => {
  const { token } = useAuth();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then(setProducts);
  }, [token]);

  return (
    <div>
      <h3>Products</h3>
      {products.map((p) => (
        <div key={p._id}>{p.name}</div>
      ))}
    </div>
  );
};

export default Products;
