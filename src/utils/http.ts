import qs from "qs";
import * as auth from "auth-provider";
import { useAuth } from "context/auth-context";

export const apiUrl = process.env.REACT_APP_API_URL;

interface ConfigParams extends RequestInit {
  data?: object;
  token?: string;
}

export const http = async (
  endPoint: string,
  { data, token, headers, ...customConfig }: ConfigParams = {}
) => {
  const config = {
    method: "GET",
    headers: {
      "Content-Type": data ? "application/json" : "",
      Authorization: token ? `Bear ${token}` : "",
    },
    ...customConfig,
  };

  if (config.method.toUpperCase() === "GET") {
    endPoint += `?${qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data || {});
  }
  return window.fetch(`${apiUrl}${endPoint}`, config).then(async (res) => {
    // 标准restful规范
    if (res.status === 401) {
      // 在fetch中当status为401、500等情况时不会自动抛出异常,这和axios是不一样的
      auth.logout();
      window.location.reload();
      return Promise.reject({ message: "请重新登录" });
    }
    const data = await res.json();
    if (res.ok) {
      return data;
    } else {
      // 需要在这里抛出
      return Promise.reject(data);
    }
  });
};

export const useHttp = () => {
  const { user } = useAuth();
  return (...[endPoint, config]: Parameters<typeof http>) =>
    http(endPoint, { ...config, token: user?.token });
};
