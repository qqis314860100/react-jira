import { useState, useEffect } from "react";

function UseDebounce(value: any, delay: number) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    // 每次在value变化以后设置一个定时器
    const timeout = setTimeout(() => setDebounceValue(value), delay);
    // 每次在上一个useEffect处理完以后再进行
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debounceValue;
}

export default UseDebounce;
