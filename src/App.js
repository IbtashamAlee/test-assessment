import './App.css';
import { Routes, Route } from "react-router-dom";
import {Login} from "./pages/login";
import {Fail} from "./pages/fail";
import {Success} from "./pages/success";
import {AuthorizedRoute, EnrouteToDashboard} from "./generic-services/authorized-routes";

function App() {
  return (
      <div className={"h-full"}>
        <Routes>
          <Route path="/" element={<EnrouteToDashboard> <Login/> </EnrouteToDashboard>} />
          <Route path="/fail" element={<Fail/>} />
          <Route path="/success" element={<AuthorizedRoute> <Success/> </AuthorizedRoute>} />
        </Routes>
      </div>
  );
}

export default App;
