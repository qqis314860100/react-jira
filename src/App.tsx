import React from "react";
import Authenticated from "authenticated";
import { useAuth } from "context/auth-context";
import Unauthenticated from "unauthenticated";
import ErrorBoundary from "components/errorBoundary";
import { FullPageErrorFallback } from "components/lib";
import "./App.less";

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      <ErrorBoundary fallbackRender={FullPageErrorFallback}>
        {user ? <Authenticated /> : <Unauthenticated />}
      </ErrorBoundary>
    </div>
  );
}

export default App;
