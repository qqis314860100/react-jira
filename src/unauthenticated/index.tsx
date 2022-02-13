import React, { useState } from "react";
import Login from "./login";
import Register from "./register";

function Unauthenticated() {
  const [isRegister, setIsRegister] = useState(false);
  const handleChange = () => {
    setIsRegister(!isRegister);
  };
  return (
    <div>
      {isRegister ? <Register /> : <Login />}
      <button onClick={handleChange}>
        切换到{isRegister ? "注册界面" : "登陆界面"}
      </button>
    </div>
  );
}

export default Unauthenticated;
