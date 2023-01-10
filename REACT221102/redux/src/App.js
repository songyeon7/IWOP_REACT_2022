import { useDispatch, useSelector } from "react-redux";
import { setData, resetData } from "./redux/reducer/dataReducer";
import { useEffect, useState } from "react";
function App() {
  const state = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const [dataa, setDataa] = useState("");
  useEffect(() => {
    console.log(state);
  }, []);
  return (
    <div>
      <input
        placeholder="Redux State 값 입력"
        onChange={(e) => {
          dispatch(setData({ text: e.target.value }));
          console.log("dispatched!");
        }}
      />
      <br />
      <input
        placeholder="Component State 값 입력"
        onChange={(e) => setDataa(e.target.value)}
      />
      <br />
      <button onClick={() => dispatch(resetData())}>초기화</button>
      <br />
      {"Redux State : " + JSON.stringify(state)}
      <br />
      {"State : " + dataa}
    </div>
  );
}

export default App;
