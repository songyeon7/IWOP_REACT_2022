import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./component/Home";
import Detail from "./component/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/:id' element={<Detail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;