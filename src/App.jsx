import { useState } from "react";

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      <h1>App Loaded ✅</h1>

      <button onClick={() => setShow(!show)}>
        Toggle Dashboard
      </button>

      {show && <div>Dashboard placeholder works</div>}
    </div>
  );
}
