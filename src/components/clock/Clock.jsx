import React, { useEffect, useState } from "react";

function Clock(props) {
  const [countDown, setcountDown] = useState(180);

  useEffect(() => {
    const timerId = setInterval(() => {
      setcountDown((prevState) => prevState - 1);
      console.log("countDown");
    }, 1000);

    return () => clearInterval(timerId);
  }, []);
  return (
    <div>
      <h1>{countDown}</h1>
    </div>
  );
}

export default Clock;
