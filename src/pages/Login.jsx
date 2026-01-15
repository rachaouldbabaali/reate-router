import { useState } from "react";
import { Button, Form, Card, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/");
    } catch {
      setError("Invalid credentials");
    }
  };

  return (
    <Card style={{ maxWidth: 400 }}>
      <Card.Body>
        <h4>Login</h4>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Control
            placeholder="Email"
            className="mb-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control
            type="password"
            placeholder="Password"
            className="mb-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Login</Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Login;
