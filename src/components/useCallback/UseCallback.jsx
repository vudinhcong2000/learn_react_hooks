import React from "react";
import { useState, useCallback } from "react";
import Content from "./Content";

const UseCallback = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div style={{ padding: "10px 32px" }}>
      <Content handleIncrease={handleIncrease} />
      <h1>{count}</h1>
    </div>
  );
};

export default UseCallback;
