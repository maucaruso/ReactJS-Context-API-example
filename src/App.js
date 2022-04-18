import React from "react";
import Login from "./components/login";
import Profile from "./components/profile";
import { useAuth } from "./providers/auth";

function App() {
  const { user } = useAuth();

  return (
    <div className="App">
      <h1>Olá mundo {user.name}</h1>

      <Profile />
      <Login />
    </div>
  );
}

export default App;
