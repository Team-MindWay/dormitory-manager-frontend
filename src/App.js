import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signin, Signup, Start, FindID, FindPasswordStep1, FindPasswordStep2 } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        <Route path="findid" element={<FindID />} />
        <Route path="findpasswordstep1" element={<FindPasswordStep1 />} />
        <Route path="findpasswordstep2" element={<FindPasswordStep2 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
