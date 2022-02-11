import React, { useState } from "react";

type move = (index: number) => void;

interface returnParams<T> {
  value: T[];
  move: move;
  add: (item: T) => void;
  clear: () => void;
}

const useArray = <T,>(list: T[]): returnParams<T> => {
  const [value, setValue] = useState(list);
  const move: move = (index) => {
    const newValue = value.slice();
    newValue.splice(index, 0);
  };
  const add = (item: T) => {
    setValue([...value, item]);
  };
  const clear = () => {
    setValue([]);
  };
  return { value, move, clear, add };
};

const person = [{ name: "tzq", age: 12 }];

const Test = () => {
  const { value, add, move, clear } = useArray(person);
  add({ age: 12, name: "12" });
  move(2);
  return <div></div>;
};
export default useArray;
