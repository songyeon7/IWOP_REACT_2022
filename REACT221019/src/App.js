import Box1 from "./Box1.js";
import Counter from "./Counter.js";
import Input from "./Input.js";

function App() {
  return (
    <>
      <div>안녕하세요</div>
      <Box1 text="hello"/>
      <Box1 text="hello2"/>
      <Box1 text="hello3"/>
      <Counter />
      <Input />
    </>
  );
}

export default App;
