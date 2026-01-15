import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

const API_URL = "http://localhost:3000";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  // Load auth from localStorage on refresh
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const savedToken = localStorage.getItem("token");

    if (savedUser && savedToken) {
      setUser(JSON.parse(savedUser));
      setToken(savedToken);
    }
  }, []);

  const login = async (email, password) => {
    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) throw new Error("Login failed");

    const data = await res.json();

    setUser(data.user);
    setToken(data.token);

    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("token", data.token);
  };

  const register = async (formData) => {
    const res = await fetch(`${API_URL}/users`, {
      method: "POST",
      body: formData, // multipart/form-data (profile pic)
    });

    if (!res.ok) throw new Error("Register failed");

    return res.json();
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
