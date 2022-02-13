import { useAuth } from "context/auth-context";
import React from "react";
import ProjectList from "screens/project-list/search-panel";

function Authenticated() {
  const { logout } = useAuth();
  return (
    <div>
      <button onClick={() => logout()}>登出</button>
      <ProjectList />
    </div>
  );
}

export default Authenticated;
