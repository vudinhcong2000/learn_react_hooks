import { memo } from "react";

function Content({ handleIncrease }) {
  console.log("re-render");
  return (
    <>
      <button onClick={handleIncrease}>Click me!</button>;
    </>
  );
}

export default memo(Content);
