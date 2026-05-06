import { useState } from "react";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // Replace with Cognito SDK later
    const fakeToken = "demo-token";
    localStorage.setItem("token", fakeToken);
    onLogin();
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    width: 300,
    margin: "100px auto",
    gap: 10,
  },
};
