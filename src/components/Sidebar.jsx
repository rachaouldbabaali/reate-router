import React from "react";
import { Nav, Card } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
    const location = useLocation();
  return (
    <div
      className="sidebar bg-light vh-100 position-fixed start-0 top-0 shadow-sm"
      style={{ width: "250px", paddingTop: "70px", zIndex: 1000 }}
    >
      <div className="p-3">
        <Card className="border-0 shadow mb-4">
          <Card.Body className="text-center py-3">Nav Menu</Card.Body>

          <Nav className="flex-column">
            <Nav.Item className="mb-2">
              <Nav.Link
                as={Link}
                to="/"
                className={`d-flex align-items-center px-3 rounded ${
                  location.pathname === "/"
                    ? "bg-primary text-white"
                    : "text-dark"
                } `}
              >
                <span className="me-2">🏠</span>
                <span>Home</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="mb-2">
              <Nav.Link
                as={Link}
                to="/products"
                className={`d-flex align-items-center px-3 rounded ${
                  location.pathname === "/products"
                    ? "bg-primary text-white"
                    : "text-dark"
                } `}
              >
                <span className="me-2">📦</span>
                <span>Product</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="mb-2">
              <Nav.Link
                as={Link}
                to="/contact"
                className={`d-flex align-items-center px-3 rounded ${
                  location.pathname === "/contact"
                    ? "bg-primary text-white"
                    : "text-dark"
                } `}
              >
                <span className="me-2">📞</span>
                <span>Contact</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card>
      </div>
    </div>
  );
};

export default Sidebar;
