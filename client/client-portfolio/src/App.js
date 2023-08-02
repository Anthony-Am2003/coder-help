import LandingPage from "./componets/landingPage/landingPage";
import Login from "./componets/login/login";
import Register from "./componets/register/register";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
      <Route path = "/" element={<LandingPage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
