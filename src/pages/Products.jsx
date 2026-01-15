import { useEffect, useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";

const Products = () => {
  const { token, user } = useAuth();
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

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this product?")) return;

    await fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setProducts(products.filter((p) => p._id !== id));
  };

  return (
    <div>
      <h3 className="mb-4">Products</h3>

      <Row>
        {products.map((p) => (
          <Col md={4} className="mb-4" key={p._id}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>{p.name}</Card.Title>

                <Card.Text className="text-muted">
                  {p.description || "No description"}
                </Card.Text>

                <h5 className="text-success">
                  {p.price} $
                </h5>

                {/* ADMIN ACTIONS */}
                {user?.role === "admin" && (
                  <div className="d-flex gap-2 mt-3">
                    <Button variant="warning" size="sm">
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(p._id)}
                    >
                      Delete
                    </Button>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Products;
