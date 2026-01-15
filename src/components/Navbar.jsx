import { Container, Navbar as BSNavbar, Button, Image } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <BSNavbar bg="primary" variant="dark" fixed="top" style={{ paddingLeft: "270px" }}>
      <Container fluid className="justify-content-between align-items-center">
        <BSNavbar.Brand>Ecommerce App</BSNavbar.Brand>

        {user ? (
          <div className="d-flex align-items-center text-white">
            {user.profilePic && (
              <Image
                src={`http://localhost:3000/${user.profilePic}`}
                roundedCircle
                width={35}
                height={35}
                className="me-2"
              />
            )}
            <span className="me-3">
              Hello, <strong>{user.name}</strong>
            </span>
            <Button variant="light" size="sm" onClick={logout}>
              Logout
            </Button>
          </div>
        ) : (
          <div>
            <Button size="sm" className="me-2" onClick={() => navigate("/login")}>
              Login
            </Button>
            <Button size="sm" variant="success" onClick={() => navigate("/register")}>
              Register
            </Button>
          </div>
        )}
      </Container>
    </BSNavbar>
  );
};

export default Navbar;
