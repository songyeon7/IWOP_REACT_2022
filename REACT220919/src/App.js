/* exlint-disable */

// import logo from "./logo.svg";
// import "./App.css";
// import FunctionComponent from "./component/FunctionComponent";
// import ClassComponent from "./component/ClassComponent";

// function App() {
//   return (
//     <>
//       {/* <ClassComponent /> */}
//       {/* <FunctionComponent /> */}
//       {/* {FunctionComponent()} */}
//       <FunctionComponent name="김송연" age="고1" ect="IWOP" />
//       <FunctionComponent name="최이준" age="고1" ect="IWOP" />
//       <ClassComponent />
//     </>
//   );
// }

// export default App;

// import { useState } from "react";

// function App() {
//   const [string, setString] = useState('');
//   const [array, setArray] = useState([]);

//   const onChangeString = (e) => {
//     setString(e.target.value);
//   }

//   const onclickButton = () => {
//     setArray((prevState) => {
//       return [ ...prevState, string];
//       // return [string, ...prevState, string];
//     });
//     setString('');
//   }

//   return (
//     <>
//       <ul>
//         {array.map(v => {
//           return <li>{v}</li>
//         })}
//       </ul>
//       <input value={string} onChange={onChangeString} />
//       <button onClick={onclickButton}>추가하기</button>
//     </>
//   );
// }

// export default App;

import { useEffect, useState } from "react";

function App() {
  const [string, setString] = useState("");
  const [mounted, setMounted] = useState("");

  useEffect(() => {
    setMounted("컴포넌트가 마운트되었습니다.");
    console.log("컴포넌트가 마운트되었습니다.");
    return () => {
      setMounted("컴포넌트가 언마운트되었습니다.");
      console.log("컴포넌트가 언마운트되었습니다.");
    };
  }, []);

  useEffect(() => {
    console.log(`string 값이 변경됨. 현재 값 : ${string}`);
  }, [string]);

  return (
    <div>
      <p>{mounted}</p>
      <input value={string} onChange={(e) => setString(e.target.value)} />
    </div>
  );
}

export default App;
