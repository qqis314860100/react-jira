import { useAuth } from "context/auth-context";
import ProjectList from "screens/project-list";

function Authenticated() {
  const { logout } = useAuth();
  return (
    <div>
      <button onClick={() => logout()}>登出</button>
      {/* <ProjectList /> */}
    </div>
  );
}

export default Authenticated;
