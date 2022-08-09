import React, { useRef, useState, useEffect } from "react";

const UseRef = () => {
  const [count, setCount] = useState(60);

  const timerId = useRef();
  const prevCount = useRef();

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
      //   setCount(count - 1);
    }, 1000);
    console.log("Start -> ", timerId.current);
  };

  const handleStop = () => {
    clearInterval(timerId.current);
    console.log("Stiop -> ", timerId.current);
  };

  console.log(count, prevCount.current);
  return (
    <div style={{ padding: 20 }}>
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};
//   const [inputValue, setInputValue] = useState("");
//   const previousInputValue = useRef("");

//   useEffect(() => {
//     previousInputValue.current = inputValue;
//   }, [inputValue]);

//   console.log(inputValue, previousInputValue.current);

//   return (
//     <>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <h2>Current Value: {inputValue}</h2>
//       <h2>Previous Value: {previousInputValue.current}</h2>
//     </>
//   );
// };
export default UseRef;
