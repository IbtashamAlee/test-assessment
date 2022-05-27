import './App.css';
import { Routes, Route } from "react-router-dom";
import {Login} from "./login";

function App() {
  return (
      <div className={"h-full"}>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
  );
}

export default App;
