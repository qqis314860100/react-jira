import React from "react";
import Authenticated from "authenticated";
import { useAuth } from "context/auth-context";
import Unauthenticated from "unauthenticated";
import "./App.less";

function App() {
  const { user } = useAuth();
  return (
    <div className="App">{user ? <Authenticated /> : <Unauthenticated />}</div>
  );
}

export default App;
