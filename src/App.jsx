// import "./App.css";
import { useState } from "react";
// import Clock from "./components/clock/Clock";
import Avatar from "./components/previewAvatar/Avatar";
// import Content from "./components/Call_API/Content";
// import Resize from "./components/resize/Resize";

//Ví Dụ 1

// const gifts = ["CPU i9", "RAM 32GB RGB", "RGB Keyboard"];

// function App() {
//   const [gift, setGift] = useState();

//   const randomGift = () => {
//     const index = Math.floor(Math.random() * gifts.length);

//     setGift(gifts[index]);
//   };

//   return (
//     <div style={{ padding: 32 }}>
//       <h1>{gift || "Chưa có phần thưởng"}</h1>
//       <button onClick={randomGift}>Lấy phần thưởng</button>
//     </div>
//   );
// }
//VD 2
function App() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ padding: 32 }}>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {/* {show && <Content />} */}
      {/* {show && <Resize />} */}
      {/* {show && <Clock />} */}
      {show && <Avatar />}
    </div>
  );
}

export default App;
