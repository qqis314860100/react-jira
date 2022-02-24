import { useState } from "react";

interface State<D> {
  error: Error | null;
  data: D | null;
  stat: "idle" | "loading" | "error" | "success";
}

const defaultConfig = {
  throwOnError: false,
};

const defaultInitialState: State<null> = {
  stat: "idle",
  data: null,
  error: null,
};

export const useAsync = <D>(
  initialState?: State<D>,
  initialConfig?: typeof defaultConfig
) => {
  const config = { ...defaultConfig, ...initialConfig };
  const [state, setState] = useState<State<D>>({
    ...defaultInitialState,
    ...initialState,
  });

  const setData = (data: D) => {
    setState({
      data,
      stat: "success",
      error: null,
    });
  };
  const setError = (error: Error) => {
    setState({
      error,
      stat: "error",
      data: null,
    });
  };

  const run = (promise: Promise<D>) => {
    if (!promise || !promise.then) {
      throw new Error("请传入 promise 类型数据");
    }
    setState({ ...state, stat: "loading" });
    return promise
      .then((data) => {
        setData(data);
        return data;
      })
      .catch((error) => {
        // catch会消化异常，如果不主动抛出，外面是接受不到异常的
        setError(error);
        if (config.throwOnError) return Promise.reject(error);
        return error;
      });
  };
  return {
    isIdle: state.stat === "idle",
    isLoading: state.stat === "loading",
    isError: state.stat === "error",
    isSuccess: state.stat === "success",
    run,
    setData,
    setError,
    ...state,
  };
};
