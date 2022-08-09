import React from "react";
import { useState, useEffect } from "react";

function Resize(props) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    //clean up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div>{width}</div>;
}

export default Resize;
