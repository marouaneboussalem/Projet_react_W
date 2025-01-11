import "./App.css";
import Home from "./components/Home/Home";

import { Routes, Route, useNavigate } from "react-router-dom";
import Explorer from "./components/Explorer/Explorer";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explorer" element={<Explorer />} />
    </Routes>
  );
}

export default App;
