import { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

export default function App() {
  const [isAuth, setIsAuth] = useState(
    !!localStorage.getItem("token")
  );

  return isAuth ? (
    <Dashboard />
  ) : (
    <Login onLogin={() => setIsAuth(true)} />
  );
}
