import { useAuth } from "context/auth-context";
import { FormEvent } from "react";

function Register() {
  const { user, register } = useAuth();
  const handleRegister = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;
    register({ username, password });
  };
  return (
    <form onSubmit={handleRegister}>
      <div>
        <label htmlFor="username">用户名</label>
        <input type="text" name="username" id="username" />
      </div>
      <div>
        <label htmlFor="username">密码</label>
        <input type="text" name="password" id="password" />
      </div>
      <div>
        <button type="submit">注册</button>
      </div>
    </form>
  );
}

export default Register;
