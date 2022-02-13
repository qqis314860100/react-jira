import { useAuth } from "context/auth-context";
import { FormEvent } from "react";

function Login() {
  const { user, login, register } = useAuth();
  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;
    login({ username, password });
  };
  return (
    <form onSubmit={handleLogin}>
      {user ? <div> 登录成功,用户名:{user?.username}</div> : null}
      <div>
        <label htmlFor="username">用户名</label>
        <input type="text" name="username" id="username" />
      </div>
      <div>
        <label htmlFor="username">密码</label>
        <input type="text" name="password" id="password" />
      </div>
      <div>
        <button type="submit">登录</button>
      </div>
    </form>
  );
}

export default Login;
