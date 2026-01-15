import { useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    profilePic: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (value) formData.append(key, value);
    });

    await register(formData);
    navigate("/login");
  };

  return (
    <Card style={{ maxWidth: 400 }}>
      <Card.Body>
        <h4>Register</h4>
        <Form onSubmit={handleSubmit}>
          <Form.Control
            placeholder="Name"
            className="mb-2"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <Form.Control
            placeholder="Email"
            className="mb-2"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <Form.Control
            type="password"
            placeholder="Password"
            className="mb-2"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <Form.Control
            type="file"
            className="mb-3"
            onChange={(e) =>
              setForm({ ...form, profilePic: e.target.files[0] })
            }
          />
          <Button type="submit">Register</Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Register;
