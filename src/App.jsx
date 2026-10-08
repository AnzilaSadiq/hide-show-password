import { useState } from "react";

import "./App.css";

function App() {
  const [setPassword, showPassword] = useState(false);

  return (
    <>
      <h1>Show & Hide Password</h1>
      <div>
        <input
          type={setPassword ? "text" : "password"}
          placeholder="Enter Password"
        />

        <button onClick={() => showPassword(!setPassword)}>
          {setPassword ? "hide" : "show"}
        </button>
      </div>
    </>
  );
}

export default App;
